import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  
  courses: string[] = ['C/C++','Java','HTML/CSS/JS','Python','AI/ML']

  constructor() {}
  ngOnInit(): void {}

  getData(val:any){
    console.log(val)
  }
}
