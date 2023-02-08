import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChangeColorDirective } from 'src/app/custom-dir/change-color.directive';
import { DemoService } from 'src/app/shared/services/demo.service';

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

  myProducts: any
  constructor(private service: DemoService) {
    // Doing the above line ensures that, in class 'MyColorComponent' a property named 'service' will be added
    // and object of 'DemoService' will be created as well as it will be set too.
  }

  ngOnInit(): void {
    this.myProducts = this.service.products
  }

  setColor(color: any){
    // this.clr?.changeColor(color)

    this.allChildren?.forEach(e => {
      e.changeColor(color)
    })
  }

}
