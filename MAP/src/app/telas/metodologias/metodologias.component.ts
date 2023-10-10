import { Component } from '@angular/core';

@Component({
  selector: 'app-metodologias',
  templateUrl: './metodologias.component.html',
  styleUrls: ['./metodologias.component.css']
})
export class MetodologiasComponent {
  isListVisible1 = false;
  isListVisible2 = false;
  isListVisible3 = false;
  isListVisible4 = false;
  isListVisible5 = false;
  isListVisible6 = false;
  isListVisible7 = false;
  isListVisible8 = false;

  toggleList1() {
    this.isListVisible1 = !this.isListVisible1;
  }
  toggleList2() {
    this.isListVisible2 = !this.isListVisible2;
  }
  toggleList3() {
    this.isListVisible3 = !this.isListVisible3;
  }
  toggleList4() {
    this.isListVisible4 = !this.isListVisible4;
  }
  toggleList5() {
    this.isListVisible5 = !this.isListVisible5;
  }
  toggleList6() {
    this.isListVisible6 = !this.isListVisible6;
  }
  toggleList7() {
    this.isListVisible7 = !this.isListVisible7;
  }
  toggleList8() {
    this.isListVisible8 = !this.isListVisible8;
  }
}
