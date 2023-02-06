import { Component, OnInit, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  // Referring to child component in HTML file
  @ViewChild(Comp1Component) cp: Comp1Component | undefined

  constructor() {}
  ngOnInit(): void {}

  increment(){
    // console.log("Increment clicked")
    this.cp?.incrementCounter()
  }
  decrement(){
    this.cp?.decrementCounter()
  }

}
