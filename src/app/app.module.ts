import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule'; // Custom Material Module

@NgModule({
  declarations: [
    AppComponent,      // Declare AppComponent
    LoginComponent,    // Declare LoginComponent
    SignupComponent    // Declare SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoAngularMaterialModule // Import custom Material module
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
