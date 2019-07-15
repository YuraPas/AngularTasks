import { Injectable } from '@angular/core';

@Injectable()
export class CalcServiceService {

constructor() { }

    addition(num1: number, num2: number)
    {
        return num1 + num2;
    }

}
