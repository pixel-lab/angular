import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Server } from './server/server.component';
import { ServerGComponent } from './server-g/server-g.component';

@NgModule({
  declarations: [
    AppComponent,
    Server,
    ServerGComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
