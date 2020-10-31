import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  constructor() {
    const tmp = false;
    if (tmp) {
      console.log('Nice');
    }
  }
}
