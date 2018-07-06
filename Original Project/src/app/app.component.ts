import { Component } from '@angular/core';
//import { Mobiles } from './mobiles';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MobilesService } from './mobiles.service';
import { getTestBed } from '@angular/core/testing';
import { UserwelcomepageComponent } from './userwelcomepage/userwelcomepage.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MobilesService]
})
export class AppComponent  {
  constructor(private mobiles:MobilesService ){}
  isDesc: boolean = false;
  column: string = 'mprice';
  direction: number;
  //mobdata:Mobiles[];
  numberOfProductsAddedToCart:number=0;

  mobiledata:any[];

 
  ngOnInit()
  {
    this.mobiles.getMobiledata().subscribe((testData)=>this.mobiledata=testData)
  }

thelistaddedtocart;
incrementingcart(count){
  this.numberOfProductsAddedToCart=count;
}
gettingdatafromuser(value){
  this.thelistaddedtocart=value;
}
cartdata()
{
  return this.thelistaddedtocart;
}
}
