import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tm';
  dummyTask = [
    {
      name: 'assign tasks',
      description: 'only for loged userdd',
      dueDate: '2020-01-22T06:00:17.000Z',
      assignedTo: 2,
      status: 'IN_PROGRESS'
    },
    {
      name: 'delete task',
      description: 'delete user',
      dueDate: '2020-01-11T06:33:54.820Z',
      assignedTo: 2,
      status: 'IN_PROGRESS'
    },
    {
      name: 'create task',
      description: 'created by duper user',
      dueDate: '2020-01-21T07:35:46.000Z',
      assignedTo: 2,
      status: 'IN_PROGRESS'
    },
    {
      name: 'add duper user',
      description: 'duper user',
      dueDate: '2020-01-11T09:02:39.006Z',
      assignedTo: 2,
      status: 'NEW'
    },
    {
      name: 'grant acess',
      description: 'grant acess to end user',
      dueDate: '2020-01-11T12:56:46.867Z',
      assignedTo: 2,
      status: 'NEW'
    },
     {
      name: 'add super user',
      description: 'super user added ',
      dueDate: '2020-01-21T07:35:46.000Z',
      assignedTo: 2,
      status: 'IN_PROGRESS'
    },
    {
      name: 'Create multiple task',
      description: 'create multiple task for all user',
      dueDate: '2020-01-11T09:02:39.006Z',
      assignedTo: 2,
      status: 'NEW'
    },
    {
      name: 'Add timesheet table',
      description: 'timesheett table for esch duper user',
      dueDate: '2020-01-11T12:56:46.867Z',
      assignedTo: 2,
      status: 'NEW'
    },
     {
      name: 'Grant permission',
      description: 'Grant permission to duper user if condition satisfies',
      dueDate: '2020-01-21T07:35:46.000Z',
      assignedTo: 2,
      status: 'IN_PROGRESS'
    },
    {
      name: 'Create login page',
      description: 'login page with validation for userid and password',
      dueDate: '2020-01-11T09:02:39.006Z',
      assignedTo: 2,
      status: 'NEW'
    },
    {
      name: 'create task page',
      description: 'Create material table for task',
      dueDate: '2020-01-11T12:56:46.867Z',
      assignedTo: 2,
      status: 'NEW'
    },
    {
      name: 'Update login page',
      description: 'login page with validation for userid and password',
      dueDate: '2020-01-11T09:02:39.006Z',
      assignedTo: 2,
      status: 'NEW'
    },
    {
      name: 'Update task page',
      description: 'Create material table for task',
      dueDate: '2020-01-11T12:56:46.867Z',
      assignedTo: 2,
      status: 'NEW'
    }
  ];
  constructor() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTask));
  }
}
