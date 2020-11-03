import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TodoListComponent } from '@container/todo-list.component';
import { HomePage } from '@page/home/home.page';
import { ButtonComponent } from '@presentation/button.component';
import { FooterComponent } from '@presentation/footer.component';
import { HeaderComponent } from '@presentation/header.component';
import { TodoListRepositoryComponent } from '@presentation/todo-list-repository.component';
import { TodoListRowComponent } from '@presentation/todo-list-row.component';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
