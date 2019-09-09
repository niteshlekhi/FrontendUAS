import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  Register(EduDet) {
    console.log(EduDet.length);
  }
  profile: [];
  ngOnInit() {
    // Fetching the Profile details of Applicant
    this.http.get<any>('http://localhost:19929/api/Applicant/GetProfile/' + sessionStorage.appid).subscribe(data => {
      this.profile = data;
    })
  }

}
