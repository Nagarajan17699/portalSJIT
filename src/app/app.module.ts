import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './ngMaterial/material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { Routes, RouterModule } from '@angular/router';


import { StudentMarksComponent} from './student-page/student-marks/student-marks.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StaffPageComponent } from './staff-page/staff-page.component';


const appRoutes: Routes = [
  {path: '', component: StudentPageComponent},
  {path: 'marks', component: StudentMarksComponent}
  // {path: '/notes', component: },
  // {path: '/fees', component: },
  // {path: '/forms', component: }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentMarksComponent,
    StaffPageComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
