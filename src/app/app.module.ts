import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeWritingComponent } from './joke-writing/joke-writing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeWritingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
