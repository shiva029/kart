import { Pipe, PipeTransform } from '@angular/core';
import { Mobiles } from './mobiles';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(mobdata: Mobiles[], args?: any, asc = true): any {
    return mobdata.sort(function(a, b){
        if(a[args] < b[args]){
            return -1;
        }
        else if( a[args] > b[args]){
            return 1;
        }
        else{
            return 0;
        }
    });
};
}
