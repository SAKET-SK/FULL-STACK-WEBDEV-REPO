import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // pData is a property associated with parents property
  @Input()
  pData: any

  
  // Emitter object -> used to emit (send) events
  @Output() emitterObj = new EventEmitter();

  getMsg(data:any){
    console.log(data)
    this.emitterObj.emit(data)
  }
}
