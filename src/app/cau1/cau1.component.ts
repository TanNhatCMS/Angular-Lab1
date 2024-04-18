import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-cau1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './cau1.component.html',
  styleUrls: ['./cau1.component.css']
})
export class Cau1Component {
  SoA: number = 10;
  SoB: number = 10;
  kq: any;
  chon: any;

  Tinh() {
    switch (this.chon) {
      case '+':
        this.kq = this.SoA + this.SoB;
        break;
      case '-':
        this.kq = this.SoA - this.SoB;
        break;
      default:
        break;
    }
  }
}
