import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoEffects } from './todo/todo.effects';
import { TodoFacade } from './todo/todo.facade';
import * as fromTodo from './todo/todo.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.TODO_FEATURE_KEY, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [TodoFacade],
})
export class DomainModule {}
