import { HomeComponent } from './admin/home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './admin/courses/courses.component';
import { ApplicantsComponent } from './admin/applicants/applicants.component';
import { StreamsComponent } from './admin/streams/streams.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ApplicantheaderComponent } from './applicant/applicantheader/applicantheader.component';
import { ProfileComponent } from './applicant/profile/profile.component';
import { ApplyComponent } from './applicant/apply/apply.component';
import { AppliedComponent } from './applicant/applied/applied.component';
import { AdminComponent } from './admin/admin.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminheaderComponent,
    CoursesComponent,
    ApplicantsComponent,
    StreamsComponent,
    DepartmentsComponent,
    AdminloginComponent,
    ApplicantheaderComponent,
    ProfileComponent,
    ApplyComponent,
    AppliedComponent,
    AdminComponent,
    ApplicantComponent,
    HomeComponent,
    MainComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      {
        path: 'applicant', component: ApplicantComponent, children: [
          { path: 'profile', component: ProfileComponent },
          {path:'applied',component:AppliedComponent},
          {path:'apply',component:ApplyComponent}
        ]
      },
      {
        path: 'admin', component: AdminComponent, children: [
          { path: 'home', component: HomeComponent },
          { path: 'applicants', component: ApplicantsComponent },
          { path: 'streams', component: StreamsComponent },
          { path: 'departments', component: DepartmentsComponent },
          { path: 'courses', component: CoursesComponent }
        ],
      },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
