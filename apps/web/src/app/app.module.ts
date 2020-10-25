import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '@presentation/header.component';
import { FooterComponent } from '@presentation/footer.component';
import { TodoListComponent } from '@container/todo-list.component';
import { TodoListRowComponent } from '@presentation/todo-list-row.component';
import { TodoListRepositoryComponent } from '@presentation/todo-list-repository.component';
import { ButtonComponent } from '@presentation/button.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from '@page/home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePage,
    TodoListComponent,
    TodoListRowComponent,
    TodoListRepositoryComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
