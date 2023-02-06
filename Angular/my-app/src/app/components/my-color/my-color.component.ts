import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChangeColorDirective } from 'src/app/custom-dir/change-color.directive';

@Component({
  selector: 'app-my-color',
  templateUrl: './my-color.component.html',
  styleUrls: ['./my-color.component.css']
})
export class MyColorComponent implements OnInit {

  // It referes to only first child element, not others
  // @ViewChild(ChangeColorDirective) clr: ChangeColorDirective | undefined;

  // Will refer to all matching child elements
  @ViewChildren(ChangeColorDirective) allChildren: QueryList<ChangeColorDirective> | undefined;

  constructor() {}
  ngOnInit(): void {}

  setColor(color: any){
    // this.clr?.changeColor(color)

    this.allChildren?.forEach(e => {
      e.changeColor(color)
    })
  }

}
