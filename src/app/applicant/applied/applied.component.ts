import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit {


  appliedList = [];
  constructor(private http: HttpClient) { }

  // Method to GET list of all Applicants
  GetApplicants(id) {
    id = 7;
    this.http.get<any>('http://localhost:19929/api/Applicant/GetAppliedApplications/' + id).subscribe(data => {
      this.appliedList = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.GetApplicants(7);
  }

}
