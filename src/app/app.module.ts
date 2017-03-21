import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { OneToFiftyComponent } from './components/oneToFifty.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, OneToFiftyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
