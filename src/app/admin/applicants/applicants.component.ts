import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  url = 'http://localhost:19929/api/Admin/GetAllApplicants';
  applicants = [];
  constructor(private http: HttpClient) { }

  // Method to GET list of all Applicants
  GetApplicants() {
    this.http.get<any>(this.url).subscribe(data => {
      this.applicants = data;
      console.log(data);
    });
  }

  UpdateStatus(Id, status) {
    var updobj = {
      aid: Id,
      asts: status
    }

    this.http.post<any>('http://localhost:19929/api/Admin/UpdateStatus', updobj).subscribe(data => {
      console.log(data);
      this.GetApplicants();
    });

    alert(Id + ' ' + status);
  }

  ngOnInit() {
    this.GetApplicants();




  }

}
