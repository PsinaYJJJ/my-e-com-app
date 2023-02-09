import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {
  transform(value:string, limit:number = 10): string {
    if(value.length > limit){
      return  value.slice(0,limit) + ' ...'
    } else {
      return value
    }
  }

}
