import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from '../models/task';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss']
})

export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  task;
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CreateTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.task !== undefined) {
      this.task = data.task;
    }
  }
  ngOnInit() {
    this.createTaskForm();
  }

  /**
   * create the taskform for create task and for update task
   */
  createTaskForm() {
    const form: any = {
      name: [this.task !== undefined ? this.task.name : '' , [Validators.required, Validators.maxLength(30)]],
      description: [this.task !== undefined ? this.task.description : '', [Validators.required, Validators.maxLength(150)]],
      dueDate: [this.task !== undefined ? this.task.dueDate : '', [Validators.required]],
      assignedTo: [this.task !== undefined ? this.task.assignedTo : '', [Validators.required]]
    };
    if (this.task !== undefined) {
      form.status = [this.task !== undefined ? this.task.status : '', [Validators.required]];
    }
    this.taskForm = this.fb.group(form);
  }

  /**
   * close the dialog and send input value to parent component
   * @param val - form input value
   */
  createTask(val) {
    this.dialogRef.close(val);
  }
}
