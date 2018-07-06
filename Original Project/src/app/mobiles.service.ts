import { Injectable } from '@angular/core';
//import {Mobiles} from './mobiles';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MobilesService {
 // mobdata: Mobiles[];


  private _url="assets/mobilesdata.json";

  constructor(private _http:Http) { }
  getMobiledata():Observable<any[]>
  {
  return this._http.get(this._url)
  .map((response:Response)=> <any[]>response.json())
  }
  /* getMobiledata():Mobiles[]
   {
     return this.mobdata=
     [
     {mid:1,mname:'AppleIphone10',mimage:'assets/images/thumbnails/iphone10.jpg',mprice:81000,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:2,mname:'AsusZenphone',mimage:'assets/images/thumbnails/asuszenphone.jpg',mprice:51000,mspecific1:'SM-G95',mspecific2:'DualmAh Battery',mspecific3:'3GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:3,mname:'BlackberryDTEK',mimage:'assets/images/thumbnails/dtek.jpg',mprice:28889,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:4,mname:'LG g6',mimage:'assets/images/thumbnails/lgg6.jpg',mprice:12999,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:5,mname:'Iphone8Plus',mimage:'assets/images/thumbnails/iphone8plus.jpg',mprice:67300,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:6,mname:'Honor8',mimage:'assets/images/thumbnails/honor8.jpg',mprice:25999,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:7,mname:'LG v30',mimage:'assets/images/thumbnails/lgv30.jpg',mprice:44990,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:8,mname:'Nokia 8',mimage:'assets/images/thumbnails/nokia8.jpg',mprice:36999,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:9,mname:'Nubia M2',mimage:'assets/images/thumbnails/NubiaM2.png',mprice:17999,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:10,mname:'Redmi Y1',mimage:'assets/images/thumbnails/RedmiY1.png',mprice:10999,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:11,mname:'SamsungGalaxy8',mimage:'assets/images/thumbnails/s8.jpg',mprice:52825,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'},
     {mid:12,mname:'Xperia XZ',mimage:'assets/images/thumbnails/xperiaz.jpg',mprice:55685,mspecific1:'SM-G950FZDDINS',mspecific2:'Dual Sim|3000 mAh Battery',mspecific3:'4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',mspecific4:'5.8 inch Quad HD+ Display',mspecific5:'12MP Rear Camera | 8MP Front Camera',mspecific6:'Exynos 8895 Octa Core 2.3GHz Processor'}
    ];
   }*/

}
