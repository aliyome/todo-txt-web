import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-txt-web-sample',
  template: `
    <p>
      sample works!
    </p>
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
export class SampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
