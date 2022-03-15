import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { consts } from 'src/consts';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
    loading = false;
    submitted = false;
    //vars
    authdata:any;

    constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public adminAuth: AdminAuthService ) {}

    ngOnInit() {
    }
    test(){
        console.log("Adm-login-comp test getting-data");
        this.adminAuth.test().subscribe((data: {}) => {
            this.authdata = data;
        });
        console.log("Adm-login-comp test got-data : ", this.authdata);
    }

    onSubmit() {
        this.submitted = true;
    }
}