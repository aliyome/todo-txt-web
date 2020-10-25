import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface TodoListItem {
  text: string;
}

@Component({
  selector: 'app-todo-list',
  template: `
    <div class="block container">
      <app-todo-list-repository
        (submit)="hoge($event)"
      ></app-todo-list-repository>
      <div>
        <app-todo-list-row
          *ngFor="let item of list"
          [item]="item"
        ></app-todo-list-row>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  list: TodoListItem[] = [{ text: 'hoge' }, { text: 'foo' }, { text: 'bar' }];

  constructor() {}

  ngOnInit(): void {}

  hoge(ev: string): void {
    console.log(ev);
  }
}
