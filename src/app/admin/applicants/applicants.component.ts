import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  fullDetails = [];

  // Method to show Modal popup
  modalpop(appid) {
    console.log(appid);
    this.http.get<any>('http://localhost:19929/api/Admin/GetFullDetails/' + appid).subscribe(data => {

      this.fullDetails = data;
      console.log(data);
    });


    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  closemodal() {
    const close = document.getElementById('myModal');
    close.style.display = 'none';

  }



  applicants = [];
  constructor(private http: HttpClient) { }

  // Method to GET list of all Applicants
  GetApplicants() {
    this.http.get<any>('http://localhost:19929/api/Admin/GetAllApplicants').subscribe(data => {
      this.applicants = data;
      console.log(data);
    });
  }

  UpdateStatus(Id, status) {
    const updobj = {
      aid: Id,
      asts: status
    };

    this.http.post<any>('http://localhost:19929/api/Admin/UpdateStatus', updobj).subscribe(data => {
      console.log(data);
      this.GetApplicants();
    });

    // alert(Id + ' ' + status);
  }

  ngOnInit() {
    this.GetApplicants();
  }

}
