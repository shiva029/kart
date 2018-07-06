import { Component, OnInit } from '@angular/core';
import {MobilesService} from '../mobiles.service';
import {Mobiles} from '../mobiles';
import { AppComponent } from '../app.component';
import { AddtocartComponent } from '../addtocart/addtocart.component';
@Component({
  selector: 'app-userwelcomepage',
  templateUrl: './userwelcomepage.component.html',
  styleUrls: ['./userwelcomepage.component.css'],
  providers:[MobilesService,AddtocartComponent]
})
export class UserwelcomepageComponent implements OnInit {
count:number=0;
mobdata;

OnedummyDualUsage;
theproductsaddedtocart=[];
  constructor(private es:MobilesService,private appcomponent:AppComponent,private cart :AddtocartComponent) {

  }

  increment()
  {
    this.theproductsaddedtocart.push(this.OnedummyDualUsage);
    this.count+=1;
    this.appcomponent.incrementingcart(this.count);
    console.log(this.theproductsaddedtocart);
    this.appcomponent.gettingdatafromuser(this.theproductsaddedtocart);
  }
  ngOnInit() {
    this.es.getMobiledata().subscribe((testData)=>this.mobdata=testData)
  }
  cartdata(){
    console.log(this.theproductsaddedtocart);
    return this.theproductsaddedtocart;
  }
 

  modalspecifications=[];
  modalclick(value){
    console.log(value);
    this.modalspecifications=[];
    for(let v in this.mobdata){
      if(this.mobdata[v].mid==value){
        this.OnedummyDualUsage=this.mobdata[v].mid;
        this.modalspecifications.push(this.mobdata[v].mspecific1);
    this.modalspecifications.push(this.mobdata[v].mspecific2);
    this.modalspecifications.push(this.mobdata[v].mspecific3);
    this.modalspecifications.push(this.mobdata[v].mspecific4);
    this.modalspecifications.push(this.mobdata[v].mspecific5);
    this.modalspecifications.push(this.mobdata[v].mspecific6);
      }
    }
    console.log(this.modalspecifications);
  }
}
