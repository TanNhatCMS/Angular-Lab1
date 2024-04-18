import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cau2.component.html',
  styleUrls: ['./cau2.component.css']
})
export class Cau2Component {
  str: string = "Trường Cao Đẳng Công Nghệ Thông Tin TP.Hồ Chí Minh";
  nambd: number = 2001;
  namht = new Date().getFullYear();
}
