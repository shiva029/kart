import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
//variables for confirm password validation
 password:string;
cpassword:string;
pwdmatch:boolean=false;
pwdnotmatch:boolean=false;
//variables for sending submitted data to server
fname:string;
lname:string;
email:string;
gender:string;
mobno:string;
uname:string;
paddress:string;
  constructor(private _http:Http,private _router:Router) { }

  ngOnInit() {
  }

onSubmit(a)
{
  this.fname=a.fname;
  this.lname=a.lname;
  this.email=a.email;
  this.gender=a.gender;
  this.mobno=a.mobno;
  this.uname=a.uname;
  this.password=a.password;
  this.cpassword=a.cpassword;
  this.paddress=a.paddress;
 
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  let options=new RequestOptions({headers:headers});
  this._http.post('api/signup',a,options)
  .subscribe(data => {alert('Registered Successfully');
  this._router.navigate(['/signin']);
},
  
error => {
  console.log(JSON.stringify(error.json()));
})

}

  checkPassword()
  {
  if(this.password==this.cpassword)
  {
  this.pwdmatch=true;
  this.pwdnotmatch=false;
  
  }
  else if(this.password!=this.cpassword)
  {
  this.pwdmatch=false;
  this.pwdnotmatch=true;
  }
  }
}
