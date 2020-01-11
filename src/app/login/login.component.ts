import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  loginFail = '';

  // created Dummyuser
  dummyUser: User[] = [
    {
      name: 'super1',
      password: 'super1',
      userId: 1,
      role: 'Super',
      roleId: 2
    },
    {
    name: 'duper1',
    password: 'duper1',
    userId: 2,
    role: 'Duper',
    roleId: 1
  },
  {
    name: 'duper2',
    password: 'duper2',
    userId: 3,
    role: 'Duper',
    roleId: 1
  },
  {
    name: 'duper3',
    password: 'duper3',
    userId: 4,
    role: 'Duper',
    roleId: 1
  }
];

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit() {

    // store the user in local storage
    localStorage.setItem('users', JSON.stringify(this.dummyUser));

    this.createLogInForm();
  }

  // create the loginForm
  createLogInForm() {
    this.logInForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

/**
 * login
 * Get all user from local storage and check the logged user username & password
 * If sucessfully login navigate to task page else display error message
 * @param logInCredentials - login userId & Password
 */
  logIn(logInCredentials) {
    let logedUser: User;
    const getAllUsers: User[] = JSON.parse(localStorage.getItem('users'));
    logedUser = getAllUsers.find(users => users.name === logInCredentials.userName && users.password === logInCredentials.password);
    if (logedUser === undefined) {
      this.loginFail = 'Invalid Username or password';
    } else {
      this.router.navigate(['task/id', logedUser.userId]);
    }

  }

}
