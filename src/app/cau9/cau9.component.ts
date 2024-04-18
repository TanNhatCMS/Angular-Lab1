import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cau9',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './cau9.component.html',
  styleUrls: ['./cau9.component.css']
})
export class Cau9Component {
  SoA: any;
  SoB: any;
  kq: any;

  ketqua() {
    if(isNaN(this.SoA) || isNaN(this.SoB)){
      this.kq = "Vui lòng nhập số";
      return this.kq ;
    }
    if(Number(this.SoA)==0 ){
      if(Number(this.SoB)==0){
        this.kq = "Phương trình bậc 1 vô số nghiệm...";
      }else{
        this.kq = "Phương trình bậc 1 vô nghiệm...";
      }
    } else{
      this.kq =  "Phương trình bậc 1 có nghiệm x=" +( (-this.SoB)/this.SoA );

    }
    return this.kq;
  }
}
