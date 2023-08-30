import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-component',
  templateUrl: './imc-component.component.html',
  styleUrls: ['./imc-component.component.css']
})
export class ImcComponentComponent {
  peso: number=0;
  altura: number=0;
  resultado: number=0;  
  

  calculo(){
    this.resultado = this.peso / (this.altura * this.altura)  
    this.imc(); 
  }

  obesidade: String="";

  imc() {
    if (this.resultado < 17) {
        this.obesidade = 'Muito abaixo do peso.';
    } else if (this.resultado >= 17 && this.resultado < 18.5) {
      this.obesidade = 'Abaixo do peso.';
    } else if (this.resultado >= 18.5 && this.resultado < 25) {
      this.obesidade = 'Peso normal.';
    } else if (this.resultado >= 25 && this.resultado < 30) {
      this.obesidade = 'Acima do peso.';
    } else if (this.resultado >= 30 && this.resultado < 35) {
      this.obesidade = 'Obesidade I.';
    } else if (this.resultado >= 35 && this.resultado < 40) {
      this.obesidade = 'Obesidade II (severa).';
    } else {
      this.obesidade = 'Obesidade III (mórbida).';
    }
  }
}

