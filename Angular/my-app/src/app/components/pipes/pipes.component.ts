import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  ngOnInit(): void { }
}
