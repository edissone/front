// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.lForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  login() {
    if (this.lForm.valid) {
      const { email, password, rememberMe } = this.lForm.value;
      const authRequest = { username: email, password };

      this.authService.login(authRequest).subscribe(
          (authResponse) => {
            console.log('Authentication successful');
            console.log('Username:', authResponse.username);
            console.log('Token:', authResponse.token);

            // Save the token in the user agent or cookies
            // Add your logic here to store the token
          },
          (error) => {
            console.log('Authentication failed');
            console.error('Error:', error);
          }
      );
    } else {
      console.log('Form is invalid.');
    }
  }
}
