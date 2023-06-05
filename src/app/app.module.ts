import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
