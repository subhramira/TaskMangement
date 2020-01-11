import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateTaskComponent } from '../createtask/createtask.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Task } from '../models/task';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {
  displayData = [];
  displayedColumns: string[] = ['name', 'description', 'duedate', 'action'];
  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  getAllUser: User[];
  rowCount = 10;
  logedUser;
  getTasks: Task[];
  tasks: Task[] = [];
  displayTask = [];
  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.getAllUser = JSON.parse(localStorage.getItem('users'));

  }

  ngOnInit() {
    let userId;
    this.route.paramMap.subscribe(params => {
      userId = params.get('id');
    });

    this.logedUser = this.getAllUser.find(user => user.userId === +userId);
    if (this.logedUser.roleId === 2) {
      this.displayedColumns.push('update');
    }
    this.getTask();

  }

  /**
   * Get the task for logged user
   */
  getTask() {
    this.getTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(this.getTasks);
    if (this.getTasks !== null) {
      if (this.logedUser.roleId === 1) {
        this.tasks = this.getTasks.filter(task => task.assignedTo === this.logedUser.userId);
      } else {
        this.tasks = this.getTasks;
      }
    }
    this.displayData = this.tasks.slice(0, this.rowCount);
    this.dataSource = new MatTableDataSource(this.displayData);
    this.dataSource.sort = this.sort;
  }

  /**
   * Open the dialog component for create and update task
   * @param index - Optional parameter - index of updated task
   * @param rowData - Optional parameter - updated data
   */
  createTask(index?, rowData?) {
    let updateTask;
    let alertMsg;
    if (rowData !== undefined) {
      updateTask = rowData;
    }
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '450px',
      height: 'auto',
      data: {
        users: this.getAllUser.filter(user => user.roleId === 1),
        task: updateTask
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (rowData === undefined) {
          result.status = 'NEW';
          this.tasks.push(result);
          alertMsg = 'Task created successfully !';
        } else {
          this.tasks[index] = result;
          alertMsg = 'Task updated successfully !';
        }
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.getTask();
        this.snackBar.open(alertMsg, '', {
          duration: 1000,
        });
      }
    });
  }

  /** Showmore row */
  showMore() {
    this.rowCount += 10;
    this.displayData = this.tasks.slice(0, this.rowCount);
    this.dataSource.data = this.displayData;
  }

  /**
   * Change the status of task
   * @param index - index of task whose status is changed
   * @param event - changed value
   */
  changeStatus(index, event) {
    this.tasks[index].status = event.value;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.getTask();
    this.snackBar.open('Stausus changed successfully!', '', {
      duration: 1000,
    });

  }

  /**
   * Update the selected task
   * @param index - index of task
   * @param element - Updated task data
   */
  editTask(index, element) {
    this.createTask(index, element);
  }

  /**
   * Delete the task
   * @param index - index of task
   */
  deleteTask(index) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.getTask();
    this.snackBar.open('Task deleted successfully!', '', {
      duration: 1000,
    });

  }

  /** logout the user and navigate to home page */
  logOut() {
    this.router.navigate(['']);
  }

  /** After view init check the matsort for date */
  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'duedate': {
          const newDate = new Date(item.dueDate);
          return newDate;
        }
        default: {
          return item[property];
        }
      }
    };
  }
}
