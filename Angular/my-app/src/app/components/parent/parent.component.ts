import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  myData : any;   // To store parent's data

  childData: any  // To store child's data

  getMsg(value:any){
    console.log(value);
    this.myData = value;
  }
}
