import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cau6.component.html',
  styleUrls: ['./cau6.component.css']
})
export class Cau6Component {
  SoA: any;
  SoB: any;
  kq: any;
  chon: any;

  Tinh() {
    if(isNaN(this.SoA) || isNaN(this.SoB)){
      this.kq = "Vui lòng nhập số";
      return;
    }
    if(Number(this.SoA)>Number(this.SoB)){
      this.kq = this.SoA;
    }else{
      this.kq = this.SoB;
    }
  }
}
