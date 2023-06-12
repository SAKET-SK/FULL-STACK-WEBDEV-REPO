import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  // Declared the 'itemForm' variable to store the user entered form data.
   itemForm: Items = {
    id: 0,
    title: '',
    quantity: 0,
  };

  // Injected the 'ItemsService' and 'Router'.
  constructor(private itemsService: ItemsService, private router: Router) {}

  ngOnInit(): void {}

  // Invoking the API call to post the data.
  create(){
    this.itemsService.create(this.itemForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/items/home"])    // On successful saving data to the server, we navigate to the home page.
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
