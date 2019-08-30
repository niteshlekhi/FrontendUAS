import { DepartmentsComponent } from './admin/departments/departments.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './admin/courses/courses.component';
import { ApplicantsComponent } from './admin/applicants/applicants.component';
import { StreamsComponent } from './admin/streams/streams.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ApplicantheaderComponent } from './applicant/applicantheader/applicantheader.component';
import { ProfileComponent } from './applicant/profile/profile.component';
import { ApplyComponent } from './applicant/apply/apply.component';
import { AppliedComponent } from './applicant/applied/applied.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminheaderComponent,
    CoursesComponent,
    ApplicantsComponent,
    StreamsComponent,
    DepartmentsComponent,
    AdminloginComponent,
    ApplicantheaderComponent,
    ProfileComponent,
    ApplyComponent,
    AppliedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
