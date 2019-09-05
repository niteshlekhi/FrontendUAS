import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [];
  depts = [];
  constructor(private http: HttpClient) { }

  // Method to GET list of all Course
  GetCourses() {
    this.http.get<any>('http://localhost:19929/api/Course/GetAll').subscribe(data => {
      this.courses = data;
      console.log(data);
    });
  }

  AddorUpdateCourse(cname: HTMLInputElement, dept: HTMLSelectElement) {
    if (document.getElementById('btnAdd').innerHTML === 'ADD')
      this.AddCourse(cname.value, dept.value);
    else
      this.UpdateCourse(cname.value, dept.value);
  }

  // Method to ADD a Course
  AddCourse(name, deptid) {
    console.log(name + " " + deptid);
    const course: any = {
      cname: name,
      cdid: deptid
    };
    this.http.post<any>('http://localhost:19929/api/Course/Add', course).subscribe(data => {
      this.courses = data;
      console.log(data);
      this.GetCourses();
    });
  }

  // Method to Update particular Course
  GetUpdateCourse(Id) {
    document.getElementById('btnAdd').innerHTML = 'UPDATE';
    this.http.get<any>('http://localhost:19929/api/Course/Get/' + Id).subscribe(data => {
      document.getElementById('sname').setAttribute('value', data[0].sname);
      document.getElementById('sid').innerHTML = Id;
      console.log(data);
    });
  }

  UpdateCourse(cname, deptid) {
    const Id = document.getElementById('sid').innerHTML;
    // Course object
    const Course: any = {
      sid: Id,
      sname: name
    };

    document.getElementById('btnAdd').innerHTML = 'ADD';
    // Adding Course
    this.http.post<any>('http://localhost:19929/api/Course/Update', Course).subscribe(data => {
      document.getElementById('sname').setAttribute('value', '  ');
      // document.getElementById('sname').setAttribute('placeholder', 'Enter Course');
      console.log(data);
      this.GetCourses();
    });
  }


  // Method to Delete Course
  DeleteCourse(Id) {
    let confirmation = confirm('Are you sure you want to Delete?');
    if (confirmation) {
      this.http.get<any>('http://localhost:19929/api/Course/Delete/' + Id).subscribe(data => {
        console.log(data);
        this.GetCourses();
      });
    }
  }

  ngOnInit() {
    // GET Departments and put in DropdownList
    this.http.get<any>('http://localhost:19929/api/Department/GetAll').subscribe(data => {
      this.depts = data;
      console.log(data);
    });
    this.GetCourses();
  }

}
