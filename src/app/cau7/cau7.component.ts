import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau7',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './cau7.component.html',
  styleUrls: ['./cau7.component.css']
})
export class Cau7Component {
  SoA: any;
  SoB: any;
  SoC: any;
  kq: any;

  isMax() {
    if(isNaN(this.SoA) || isNaN(this.SoB) || isNaN(this.SoC)){
      this.kq = "Vui lòng nhập số";
      return this.kq ;
    }
    if(Number(this.SoA)>Number(this.SoB) && Number(this.SoA)>Number(this.SoC)){
      this.kq = this.SoA;
    }else if(Number(this.SoB)>Number(this.SoA) && Number(this.SoB)>Number(this.SoC)){
      this.kq = this.SoB;
    }else if(Number(this.SoC)>Number(this.SoA) && Number(this.SoC)>Number(this.SoB)) {
      this.kq = this.SoC;
    }
    return this.kq;
  }
}
