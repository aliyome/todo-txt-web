import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="rounded p-2 font-sans text-white bg-gray-800 bg-opacity-75 hover:bg-opacity-50"
    >
      {{ text }}
    </button>
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
export class ButtonComponent implements OnInit {
  @Input()
  text: string;

  constructor() {}

  ngOnInit(): void {}
}
