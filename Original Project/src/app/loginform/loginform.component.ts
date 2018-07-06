import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
un:string;
pw:string;
  constructor(private _http:Http,private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(a)
  {
    console.log(a);
    var headers= new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
  this._http.post('api/signin',a, options)
            .subscribe(data => {alert("login Successful");
           this._router.navigate(['signin/userwelcome'])
              //Redirect to corresponding Home Page
                //  alert(data);
            }, error => {
              alert("invalid user");
              //Used to clear the input field
              this.un="";
              this.pw="";
                
            })
  
  }

}
