
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HelloComponent } from './hello.component';
import { HelloAzureRenderModule } from './hello-azure-render.module';
import { HelloGoogleCloudRenderModule } from './hello-googlecloud-render.module';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    environment.render === 'azure'
    ? HelloAzureRenderModule
    : HelloGoogleCloudRenderModule,
    BrowserModule
  ],
  providers: [],
  exports: [HelloComponent]
})
export class HelloModule { }
