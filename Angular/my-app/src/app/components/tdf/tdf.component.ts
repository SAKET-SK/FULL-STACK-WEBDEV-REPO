import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { listCourses, namePattern } from 'src/app/shared/Common data/constants';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  
  // courses: string[] = ['C/C++','Java','HTML/CSS/JS','Python','AI/ML']
  courses: string[] = listCourses

  myNamePattern = namePattern;

  constructor() {}
  ngOnInit(): void {}

  getData(val:any){
    console.log(val)
  }
}
