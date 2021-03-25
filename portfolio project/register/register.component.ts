import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let save = sessionStorage;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  checkUser2(loginRef:any) {
    //console.log("Event generated");
    let fname1 = loginRef.form.value.fname;
    console.log(fname1);
    let lname1 = loginRef.form.value.lname;
    console.log(lname1);
    let user2 = loginRef.form.value.user;
    console.log(user2);
    let pass2 = loginRef.form.value.pass;
    console.log(pass2);
    this.save_to_session_storage(user2, pass2);
    //go back to login page
    this.router.navigate(['login']);
  }

  save_to_session_storage(username:string, password:string){
    var user_info:any = {};
    user_info.name = username;
    user_info.pass = password;
    save.setItem("user_info", JSON.stringify(user_info));
  }

}
