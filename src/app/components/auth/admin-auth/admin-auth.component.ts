import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  httpdata:any;

  constructor(public adminAuth: AdminAuthService) { }

  ngOnInit(): void {
  }

  test():any {
    console.log("Admin-auth-comp test getting-data");
    this.adminAuth.test().subscribe((data: {}) => {
      this.httpdata = data;
    });
    console.log("Admin-auth-comp test got-data : ", this.httpdata);
  }
}
