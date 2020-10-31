import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-render',
  templateUrl: './hello-render.component.html',
  styleUrls: ['./hello-render.component.scss']
})
export class HelloRenderComponent {

  @Input() data: string;
  constructor() {
    console.log('HelloAzure');
  }
}
