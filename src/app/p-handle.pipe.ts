import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pHandle'
})
export class PHandlePipe implements PipeTransform {

  transform(desc: string): string {
    return desc.split(' ').slice(0,10).join(' ');
  }

}
