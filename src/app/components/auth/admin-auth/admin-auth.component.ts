import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  //vars
  httpdata:any;
  
  //post call objects
  httppost:any;
  adminAuthRes:any;

  public adminLogin = {uid: undefined, pin: undefined};


  formControl = new FormControl('');

  constructor(public adminAuth: AdminAuthService) { }

  ngOnInit(): void {
  }

  test() {
    console.log("Admin-auth-comp test getting-data");
    this.adminAuth.test().subscribe((data: {}) => {
      this.httpdata = data;
    });
    console.log("Admin-auth-comp test got-data : ", this.httpdata);
  }

  testpost(a:any) {
    console.log("Admin-auth-comp testpost posting-request",a.value);
    this.adminAuth.testpost(a.value).subscribe((data: {}) => {
      this.adminAuthRes = data;
    });
    console.log("Admin-auth-comp testpost post-response : ", this.adminAuthRes);
  }
}
