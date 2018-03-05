import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "counter",
  template: `<button (click)="increment()">increment</button>
  <button (click)="decrement()">decrement</button>`
})
export class CounterComponent {
  @Input() count: number;
  @Output() change: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}
