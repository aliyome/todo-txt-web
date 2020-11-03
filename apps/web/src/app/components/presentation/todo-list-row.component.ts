import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
export class TodoListRowComponent {
  @Input()
  item: { text: string };
}
