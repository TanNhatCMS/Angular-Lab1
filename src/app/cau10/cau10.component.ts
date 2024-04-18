import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cau10.component.html',
  styleUrls: ['./cau10.component.css']
})
export class Cau10Component {
  SoA: any;
  SoB: any;
  SoC: any;
  x: any;
  x1: any;
  x2: any;
  kq: any;

  Tinh() {
    this.x = this.x1 = this.x2 = undefined;
    if (isNaN(this.SoA) || isNaN(this.SoB) || isNaN(this.SoC)) {
      this.kq = "Vui lòng nhập số";
      return;
    }
    let delta = this.SoB * this.SoB - 4 * this.SoA * this.SoC;
    if (delta > 0) {
      this.x1 = (-this.SoB + Math.sqrt(delta)) / (2 * this.SoA);
      this.x2 = (-this.SoB - Math.sqrt(delta)) / (2 * this.SoA);
      this.kq = `Phương trình có hai nghiệm phân biệt`;
    } else if (delta === 0) {
      this.x = -this.SoB / (2 * this.SoA);
      this.kq = `Phương trình có nghiệm kép`;
    } else {
      this.kq = "Phương trình không có nghiệm thực";
    }
  }
}
