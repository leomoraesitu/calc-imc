import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-component',
  templateUrl: './imc-component.component.html',
  styleUrls: ['./imc-component.component.css']
})
export class ImcComponentComponent {
  num1: number=0;
  num2: number=0;
  resultado: number=0;

  calculo(){
    this.resultado = this.num1 / (this.num2 * this.num2)
  }
}

