import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  message = "Starting Angular Pipes"

  emp = {
    id: 1001,
    name: "ABC",
    post: "Engineer",
    salary: 35000,
    address: "Pune"
  }

  price = 9999

  myNewDate = new Date()

  students = [
    {id:1001, name:"Allan", gender:"Male", address:"London", contact:"9898989898"},
    {id:1002, name:"Bob", gender:"Male", address:"Paris", contact:"94565789898"},
    {id:1003, name:"Carol", gender:"Female", address:"Spain", contact:"9898980008"},
    {id:1004, name:"Davis", gender:"Female", address:"London", contact:"1298989898"},
    {id:1005, name:"Elmer", gender:"Male", address:"USA", contact:"5410989898"},
    {id:1006, name:"Frank", gender:"Male", address:"Germany", contact:"9999989898"},
    {id:1007, name:"Grace", gender:"Female", address:"London", contact:"1298981680"}
  ]
    
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void { }

  passId(id: any){
    console.log(id);
    this.router.navigate(['/pipes',id])   // pass id onto the url bar if we click on id
  }

  


}
