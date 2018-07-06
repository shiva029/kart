import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MobilesService } from '../mobiles.service';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private appcomp:AppComponent,private mobiledat:MobilesService) { }
dataid=[];
mobiledata=[];
data=[];
  ngOnInit() {
    this.dataid=this.appcomp.cartdata();
    this.mobiledat.getMobiledata().subscribe((testData)=>{console.log(testData);
      this.mobiledata=testData;
      console.log(this.dataid);
    console.log(this.mobiledata);
    for(let v in this.dataid){
      for(let i in this.mobiledata){
        if(this.dataid[v]==this.mobiledata[i].mid){
          this.data.push(this.mobiledata[i]);
          console.log(this.data);
        }
      }
    }
    });
  }
  gettingdatafromuser(value){
    this.dataid=value;
    console.log(this.dataid);
  }


}
