import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'image-toggle';
  currentImage = 'assets/img1-leopard.jpg';
  currentName = 'Leopard';

  changeImage() {
    if (this.currentImage === 'assets/img1-leopard.jpg') {
      this.currentImage = 'assets/img2-lion.jpg';
      this.currentName = 'Lion';
    } else {
      this.currentImage = 'assets/img1-leopard.jpg';
      this.currentName = 'Leopard';
    }
  }
}
