import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { CounterComponent } from './counter/counter.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { CounterIntervalComponent } from './counter-interval/counter-interval.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTimeComponent,
    CounterComponent,
    RandomNumberComponent,
    CounterIntervalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
