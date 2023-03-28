import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // Declared the 'itemForm' variable to store the user form edited data.
  itemForm: Items = {
    id: 0,
    title: '',
    quantity: 0,
  };

  //  Injected the 'ActivatedRoute', 'Router', 'ItemsService'.
  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService) {}

  // Inside of the 'ngOninit' life cycle method, we try to read the 'id' value from the route using 
  // the 'ActivatedRoute.paramMap.subscribe()', then we are invoking our get API call.
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  //Invokes the API call by 'id' value, on successful the response will be assigned to 
  //'itemForm' variable, so that data gets rendered on the form.
  getById(id: number) {
    this.itemsService.getById(id).subscribe((data) => {
      this.itemForm = data;
    });
  }
  // Invokes the update API, on success navigate back to the 'HomeComponent'.
  update() {
    this.itemsService.update(this.itemForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/items/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
