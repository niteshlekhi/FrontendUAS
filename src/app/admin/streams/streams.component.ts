import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  streams = [];

  constructor(private http: HttpClient) { }

  // Method to GET list of all Stream
  GetStreams() {
    this.http.get<any>('http://localhost:19929/api/Stream/GetAll').subscribe(data => {
      this.streams = data;
      console.log(data);
    });
  }

  AddorUpdateStream(input: HTMLInputElement) {
    if (document.getElementById("btnAdd").innerHTML == 'ADD')
      this.AddStream(input.value);
    else
      this.UpdateStream(input.value);
  }

  // Method to ADD a Stream
  AddStream(name) {
    let stream: any = {
      sname: name
    }
    this.http.post<any>('http://localhost:19929/api/Stream/Add', stream).subscribe(data => {
      this.streams = data;
      console.log(data);
      this.GetStreams();
    });
  }

  // Method to Update particular Stream
  GetUpdateStream(Id) {
    document.getElementById("btnAdd").innerHTML = 'UPDATE';
    this.http.get<any>('http://localhost:19929/api/Stream/Get/' + Id).subscribe(data => {
      document.getElementById("sname").setAttribute("value", data[0].sname);
      document.getElementById("sid").innerHTML = Id;
      console.log(data);
    });
  }

  UpdateStream(name) {
    var Id = document.getElementById("sid").innerHTML;
    let stream: any = {
      sid: Id,
      sname: name
    }
    document.getElementById("btnAdd").innerHTML = 'ADD';
    this.http.post<any>('http://localhost:19929/api/Stream/Update', stream).subscribe(data => {
      document.getElementById("sname").setAttribute("value", '  ');
      // document.getElementById("sname").setAttribute("placeholder", 'Enter stream');
      console.log(data);
      this.GetStreams();
    });
  }


  // Method to Delete stream
  DeleteStream(Id) {
    let confirmation = confirm('Are you sure you want to Delete?');
    if (confirmation) {
      this.http.get<any>('http://localhost:19929/api/Stream/Delete/' + Id).subscribe(data => {
        console.log(data);
        this.GetStreams();
      });
    }
  }


  ngOnInit() {
    this.GetStreams();
  }

}
