import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cau8.component.html',
  styleUrls: ['./cau8.component.css']
})
export class Cau8Component {
  SoA: any;
  SoB: any;
  SoC: any;
  kq: any;

  ketqua() {
    if(isNaN(this.SoA) || isNaN(this.SoB) || isNaN(this.SoC)){
      this.kq = "Vui lòng nhập số";
      return this.kq ;
    }
    if(Number(this.SoA)>Number(this.SoB) ){
      let temp:  number = Number(this.SoA);
      this.SoA=Number(this.SoB);
      this.SoB=temp;
    }
    if(Number(this.SoA)>Number(this.SoC)){
      let temp:  number = Number(this.SoA);
      this.SoA=Number(this.SoC);
      this.SoC=temp;
    }
    if(Number(this.SoB)>Number(this.SoC)){
      let temp:  number = Number(this.SoB);
      this.SoB=Number(this.SoC);
      this.SoC=temp;
    }
    this.kq = this.SoA + " " + this.SoB + " " + this.SoC;
    return this.kq;
  }
}
