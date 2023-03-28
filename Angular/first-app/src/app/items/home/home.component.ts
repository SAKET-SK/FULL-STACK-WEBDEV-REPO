import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from '../items.service';

declare var window: any;   // Declare window variable type.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allItems: Items[] = [];
  deleteModal: any;        // The variable 'deleteModal' to store the instance of the botstrap modal.
  idTodelete: number = 0;  // The variable 'idToDelete' to store the 'id' value of the item to be deleted.

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    // Assign the bootstrap modal instance to our 'deleteModal' variable.
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  get() {
    this.itemsService.get().subscribe((data) => {
      this.allItems = data;
    });
  }
  
  // The 'openDeleteModal()' method gets invoked by clicking the delete button. Here we open the delete confirmation modal.
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  // The 'delete()' method invokes the delete API call on the success we will hide our bootstrap modal and 
  // also exclude the item from the 'allItems' variable.
  delete() {
    this.itemsService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allItems = this.allItems.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
