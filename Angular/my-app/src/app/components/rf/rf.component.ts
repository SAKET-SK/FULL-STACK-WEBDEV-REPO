import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {
  
  empData: any

  courses: string[] = ['C/C++','Java','HTML/CSS/JS','Python','AI/ML']

  constructor() {}

  ngOnInit(): void {
    this.empData = new FormGroup({
      fname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
      lname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
      email: new FormControl('',[Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      password: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]{7,20}')]),
      phone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')]),
      courses: new FormControl('',[Validators.required]),
      terms: new FormControl('',[Validators.requiredTrue]) // This is required for radio button and checkbox
    })
  }
  
  getData(val:any){
    console.log(val)
  }
}
