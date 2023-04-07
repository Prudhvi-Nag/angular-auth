import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class reversePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.split('').reverse().join('');
  }

}



@Pipe({
  name: 'reverseSlice'
})
export class ReverseSlicePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const reversed = value.split('').reverse().join('');
    // const sliced = reversed.slice(0, reversed.length / 2);
    const halfLength = Math.floor(reversed.length / 2);
    const sliced = reversed.slice(halfLength);

    return sliced;
  }
}




@Pipe({
  name: 'indianRup'
})
export class indianRupPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }

    return "₹ "+ value;
  }
}

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (value == null) {
      return null;
    }
    const datePipe = new DatePipe('en-In');
    return datePipe.transform(value, 'yyyy-MM-dd');
  }
}

