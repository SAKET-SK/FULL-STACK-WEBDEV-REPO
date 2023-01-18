import { Component } from '@angular/core';

// Component annotation
@Component({
  selector: 'app-root',       // If anywhere we need to use this component, we use this selector
  templateUrl: './app.component.html',
  // template: '<p>Paragraph</p>'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
}
