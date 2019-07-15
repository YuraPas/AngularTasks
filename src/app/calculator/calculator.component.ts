import { Component, OnInit } from '@angular/core';
import { CalcServiceService } from '../calc-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalcServiceService]
})
export class CalculatorComponent implements OnInit {

  visible : boolean = true;
  private firstNumber: number;
  private secondNumber: number;
  private result: number;
  constructor(private calcService: CalcServiceService) { }

  ngOnInit() {
  }
  add(){
    this.result = this.calcService.addition(this.firstNumber, this.secondNumber);
  }
  

}
