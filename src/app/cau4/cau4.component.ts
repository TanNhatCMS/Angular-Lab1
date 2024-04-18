import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-cau4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cau4.component.html',
  styleUrls: ['./cau4.component.css']
})
export class Cau4Component {
  isReadonly = true;

  isDisabled = false;
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  toggleEnabled() {
    this.isReadonly = !this.isReadonly;
  }
  myClick(){
    alert("Hello");
  }
}
