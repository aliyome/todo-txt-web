import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Injectable,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-repository',
  template: `
    <div class="flex container">
      <input
        [formControl]="form"
        type="text"
        class="px-2 py-1 border-gray-800 border-solid border-2 rounded w-full"
      />
      <app-button [text]="'submit'" (click)="onSubmit()"></app-button>
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
export class TodoListRepositoryComponent implements OnInit, OnDestroy {
  @Input()
  set repositoryUrl(url: string) {
    this.setFormValue(url);
  }

  @Output()
  submit: EventEmitter<string>;

  // @Output()
  // valueChanged: EventEmitter<string>;

  readonly form: FormControl;
  private readonly onDestroy$: EventEmitter<void>;

  constructor() {
    // this.valueChanged = new EventEmitter();
    this.submit = new EventEmitter();
    this.form = new FormControl('');
    this.onDestroy$ = new EventEmitter();
  }

  ngOnInit(): void {
    // this.form.valueChanges
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe((value) => {
    //     this.valueChanged.emit(value);
    //   });
  }

  ngOnDestroy(): void {
    this.onDestroy$.complete();
  }

  onSubmit(): void {
    this.submit.emit(this.form.value);
  }

  private setFormValue(value: string) {
    this.form.setValue(value, { emitEvent: false });
  }
}
