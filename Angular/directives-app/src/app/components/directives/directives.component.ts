import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  boolVal: boolean = false;     // We can control visibility of an element from here too

  bool1: boolean = true;
  bool2: boolean = true;
  bool3: boolean = true;

  berries = ["Acaiberry","Blueberry","Cranberry","Dewberry","Elderberry","Foxberry","Gooseberry"]

  myChoice = "Dewberry"
  
  constructor() { }
  ngOnInit(): void { }

  alterBool() {
    this.boolVal = !this.boolVal   // invert. ex :- make true as false and vice versa
  }

  alterVisibility1() {
    this.bool1 = !this.bool1
  }
  alterVisibility2() {
    this.bool2 = !this.bool2
  }
  alterVisibility3() {
    this.bool3 = !this.bool3
  }
}
