import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // Chat API Code
  TawkInit() {
    let Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5a5ef5014b401e45400c2759/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }

  // Method to Display Loader
  disp_Loader(Id) {
    const loader = document.getElementById(Id);
    loader.style.display = 'block';
  }

  // Method to Close Loader
  close_Loader(Id) {
    const loader = document.getElementById(Id);
    loader.style.display = 'none';
  }

  // Method to Display Modal popup
  dispModal(modal) {
    const modalObj = document.getElementById(modal);
    modalObj.style.display = 'block';
  }

  // Method to Close Modal popup
  closeModal(modal) {
    const modalObj = document.getElementById(modal);
    modalObj.style.display = 'none';
  }

  // Form submit event to Register Applicant
  RegisterApplicant(register: NgForm) {
    const registerObj = register.value;
    const applicant = {
      appfname: registerObj.appfname,
      appfcontact: registerObj.appfcontact,
      appname: registerObj.appname,
      appemail: registerObj.appemail,
      apppwd: registerObj.apppwd,
      appcontact: registerObj.appcontact,
      appaddress: registerObj.appaddress,
      appgender: registerObj.appgender,
      appDOB: registerObj.appDOB
    };
    this.disp_Loader('cover-spin');
    this.http.post<any>('http://localhost:19929/api/Applicant/Register', applicant).subscribe(data => {

      this.close_Loader('cover-spin');
      document.getElementById('msg').style.display = 'block';

      // Reset form after Registration
      register.reset();
    });
  }

  // Method to perform Applicant Login on button click
  Login(credentials: NgForm) {
    this.disp_Loader('cover-spin');
    this.http.post<any>('http://localhost:19929/api/Applicant/Login', credentials.value).subscribe(data => {
      console.log(data);
      // Storing Applicant ID in local session storage
      sessionStorage.appid = parseInt(data);
      this.close_Loader('cover-spin');
      document.getElementById('LoginMsg').style.display = 'block';
      // Set Delay of 3 seconds
      setTimeout(() => { alert('gsg')}, 3000);
      // Redirect to account



      // Reset form after Registration
      credentials.reset();
    });
  }

  // Set default value of Gender RadioButton
  gender = 'M';

  ngOnInit() {
    this.TawkInit();

  }


}
