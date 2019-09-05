import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  streams: any = [];
  depts: any = [];

  constructor(private http: HttpClient) { }
  // Method to GET all departments
  GetDepartments() {
    this.http.get<any>('http://localhost:19929/api/Department/GetAll').subscribe(data => {
      this.depts = data;
      console.log(data);
    });
  }

  AddorUpdateDept(dname: HTMLInputElement, streamid: HTMLSelectElement) {
    if (document.getElementById('btnAdd').innerHTML == 'ADD')
      this.AddDept(dname.value, streamid.value);
    else
      this.UpdateDept(dname.value, streamid.value);
  }

  AddDept(deptname, streamid) {
    const dept = {
      dname: deptname,
      dsid: streamid
    }
    this.http.post<any>('http://localhost:19929/api/Department/Add', dept).subscribe(data => {
      alert('Successfully added');
      this.GetDepartments();
    });
  }

  // GET: Method to put Department name in textfield
  GetUpdateDept(did) {
    document.getElementById('btnAdd').innerHTML = 'UPDATE';
    this.http.get<any>('http://localhost:19929/api/Department/Get/' + did).subscribe(data => {
      document.getElementById('dname').setAttribute('value', data[0].dname);
      document.getElementById('did').innerHTML = did;
      console.log(data);
    });
  }



  // GET: Method to Delete a Stream
  DeleteDept(did) {
    let confirmation = confirm('Are you sure you want to Delete?');
    if (confirmation)
      this.http.get<any>('http://localhost:19929/api/Department/Delete/' + did).subscribe(data => {
        alert('Deleted successfully');
        this.GetDepartments();
      });
  }

  // POST: Method to UPDATE Department
  UpdateDept(deptname, streamid) {
    const Id = document.getElementById('did').innerHTML;
    // Department object
    const dept: any = {
      did: Id,
      dname: deptname,
      dsid: streamid
    }

    document.getElementById('btnAdd').innerHTML = 'ADD';
    // Adding Stream
    this.http.post<any>('http://localhost:19929/api/Department/Update', dept).subscribe(data => {
      document.getElementById('dname').setAttribute('value', ' ');
      // document.getElementById('sname').setAttribute('placeholder', 'Enter stream');
      alert('Updated successfully');
      this.GetDepartments();
    });
  }

  ngOnInit() {
    // GET streams and put in DropdownList
    this.http.get<any>('http://localhost:19929/api/Stream/GetAll').subscribe(data => {
      this.streams = data;
      console.log(data);
    });
    this.GetDepartments();

  }

}
