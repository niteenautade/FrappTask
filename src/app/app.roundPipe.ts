import {Pipe} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe {
  transform (input:number) {
    //return Math.round(input/1000)+'k';
    let modifiedInput = input/1000;
    return modifiedInput.toFixed(1)+"k";
  }
}