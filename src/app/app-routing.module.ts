import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './createtask/createtask.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



const routes: Routes = [
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'task/id/:id',
    component: TaskComponent
  }
];

@NgModule({
  declarations: [LogInComponent, TaskComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [RouterModule],
  entryComponents: [CreateTaskComponent],
})
export class AppRoutingModule { }
