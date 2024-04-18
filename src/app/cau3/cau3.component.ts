import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cau3.component.html',
  styleUrls: ['./cau3.component.css']
})
export class Cau3Component {
  isRead: boolean = false;
  checked() {
    this.isRead = !this.isRead;
  }
}
