import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  urlGet = 'http://localhost:19929/Applicant/Get/3';
  urlPost = 'http://localhost:19929/Stream/Add';
  data = [];
  constructor(private http: HttpClient) { }

  // GET method
  applicant = [];
  getData() {
    this.http.get<any>(this.urlGet).subscribe(data => {
      this.applicant = data;
      console.log(data);
      document.getElementById('fname').textContent = this.applicant['appfname'];
      

    });
  }

  // POST method
  postData(name: HTMLInputElement) {
    let data: any = {
      sname: name.value
    };
    this.http.post<any>(this.urlPost, data).subscribe(data => {
      console.log(data);
    })
  }






  // // Old
  // fetchData(input: HTMLInputElement) {
  //   let fields: any = { sname: input.value };
  //   this.http.post<any>(this.urlPost, fields).subscribe(d => {
  //     // console.log(d);
  //     alert(d);
  //   });
  // }

  // test() {
  //   alert('aefaf');
  // }

  ngOnInit() {
    // GET


    this.http.get<any>(this.urlGet).subscribe(data => this.data = data);


    // POST



  }

}
