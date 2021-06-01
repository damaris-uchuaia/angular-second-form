import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';
import { StyledButtonComponent } from './styled-button/styled-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    StyledButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
