import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import  {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { TempaddressComponent } from './tempaddress/tempaddress.component';
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserwelcomepageComponent } from './userwelcomepage/userwelcomepage.component';

import { WatchesComponent } from './watches/watches.component';
import { HeadsetsComponent } from './headsets/headsets.component';
import { MobliesComponent } from './moblies/moblies.component';
import { LaptopsComponent } from './laptops/laptops.component';
import {MobilesService} from './mobiles.service';
import { HttpModule } from '@angular/http';
import { AddtocartComponent } from './addtocart/addtocart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    RegistrationformComponent,
    CarouselsComponent,
    TempaddressComponent,
    AcknowledgeComponent,
    AboutComponent,
    ContactComponent,
    UserwelcomepageComponent,
 
    WatchesComponent,
    HeadsetsComponent,
    MobliesComponent,
    LaptopsComponent,
 
    AddtocartComponent,

  ],
  imports: [
    BrowserModule,FormsModule, HttpModule,RouterModule.forRoot([
      {path:'',component:CarouselsComponent},
      {path:'mobiles',component:MobliesComponent},
      {path:'watches',component:WatchesComponent},
      {path:'signup',component:RegistrationformComponent},
      {path:'signin',component:LoginformComponent},
      {path:'aboutus',component:AboutComponent},
      {path:'contactus',component:ContactComponent},
      {path:'signin/userwelcome',component: UserwelcomepageComponent},
      {path:"Cart",component:AddtocartComponent}

    ])
  ],
  providers: [MobilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
