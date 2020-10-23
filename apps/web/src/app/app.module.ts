import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@todo-txt-web/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
