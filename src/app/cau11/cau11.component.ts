import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau11',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cau11.component.html',
  styleUrls: ['./cau11.component.css']
})
export class Cau11Component {
  isQuadratic: boolean = false;
  SoA: any;
  SoB: any;
  SoC: any;
  x: any;
  x1: any;
  x2: any;
  kq: any;
  handleChange(event: any) {
    this.kq="";
  }

  Tinh() {
    this.x = this.x1 = this.x2 = undefined;
    if (this.isQuadratic) {
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
    } else {
      if (isNaN(this.SoA) || isNaN(this.SoB)) {
        this.kq = "Vui lòng nhập số";
        return this.kq;
      }
      if (Number(this.SoA) == 0) {
        if (Number(this.SoB) == 0) {
          this.kq = "Phương trình bậc 1 vô số nghiệm...";
        } else {
          this.kq = "Phương trình bậc 1 vô nghiệm...";
        }
      } else {
        this.x = -this.SoB / this.SoA;
        this.kq = "Phương trình bậc 1 có nghiệm x";
      }
    }
  }
}
