import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  courseList = [];
  deptList = [];
  streamList = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.FillStreamDropdown();
  }
  // GET: Method to Get all Streams and put in Stream Dropdown
  FillStreamDropdown() {
    this.http.get<any>('http://localhost:19929/api/Stream/GetAll').subscribe(data => {
      this.streamList = data;

    });
  }

  // GET all Courses and put in Course Dropdown
  FillCourseDropdown(id) {
    console.log(id);
    this.http.get<any>('http://localhost:19929/api/Course/GetCourseFromDept/' + id).subscribe(data => {
      this.courseList = data;
      console.log(data);
    });
  }

  // GET all Departments and put in Department Dropdown
  FillDeptDropdown(id) {
    console.log(id);
    this.http.get<any>('http://localhost:19929/api/Department/GetDeptFromStream/' + id).subscribe(data => {
      this.deptList = data;
    });
  }

}
