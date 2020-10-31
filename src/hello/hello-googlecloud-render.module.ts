
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloRenderComponent } from './hello-googlecloud-render/hello-render.component';

@NgModule({
  declarations: [
    HelloRenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [HelloRenderComponent]
})
export class HelloGoogleCloudRenderModule { }
