import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { namePattern, listCourses } from 'src/app/shared/Common data/constants';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {
  
  empData: any

  // courses: string[] = ['C/C++','Java','HTML/CSS/JS','Python','AI/ML']
  courses: string[] = listCourses

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {

    // For Reactive Forms

    // Option 1 :- Create FormGroup object followed by FormControl objects

    /* this.empData = new FormGroup({
      fname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
      lname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
      email: new FormControl('',[Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      password: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]{7,20}')]),
      phone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')]),
      courses: new FormControl('',[Validators.required]),
      terms: new FormControl('',[Validators.requiredTrue]) // This is required for radio button and checkbox
    }) */ 
    
    // For commenting multiple lines like this, "Shift + Alt + A"

    // Option 2 :- Using FormBuilder to create reactive forms
    // Use dependency injection for this. Means, pass the value in constructor. We will get object directly, not have to create it.
    this.empData = this.fb.group({
      fname: ['',[Validators.required, Validators.pattern(namePattern)]],
      lname: ['',[Validators.required, Validators.pattern(namePattern)]],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]{7,20}')]],
      phone: ['',[Validators.required, Validators.pattern('[0-9]{10}')]],
      courses: ['',[Validators.required]],
      terms: ['',[Validators.requiredTrue]]
    });
  }
  
  getData(val:any){
    console.log(val)
  }
}
