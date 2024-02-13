import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDisplay',
  standalone: true
})
export class DateDisplayPipe implements PipeTransform {

  transform(value: string) {
    //Regex
    if (!/^\d{16}$/.test(value)) {
      return value;
    }
    return value.replace(/(\d{4})(?=\d)/g, '$1 - ');
    // return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 – $2 – $3 – $4');
  }
}
