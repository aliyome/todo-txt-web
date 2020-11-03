import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-row',
  template: ` <div>{{ item.text }}</div> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListRowComponent implements OnInit {
  @Input()
  item: { text: string };

  constructor() {}

  ngOnInit(): void {}
}
