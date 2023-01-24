import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  boolVal: boolean = false; 
  
  alterBool() {
    this.boolVal = !this.boolVal   // invert. ex :- make true as false and vice versa
  }

  bool1: boolean = true;
  bool2: boolean = true;
  bool3: boolean = true;

  berries = ["Acaiberry","Blueberry","Cranberry","Dewberry","Elderberry","Foxberry","Gooseberry"]

  myChoice = "Dewberry"

  // Condition for setting the style
  myCondition = true
  // Creating a new property 
  myNewStyle = {
    color: this.myCondition ? "green" : "blue",
    fontSize: "50px"
  }

  flag = true
  myNewClass = {
    "txtDanger": this.flag
  }
  
}
