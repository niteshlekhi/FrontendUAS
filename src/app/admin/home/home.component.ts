import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: {
    TotalApplicants: '',
    TotalApproved: '',
    TotalRejected: '',
    TotalPending: ''
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:19929/api/Admin/GetDashboard').subscribe(data => {
      this.list = data;
    })
  }

}
