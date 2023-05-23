import { Component } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate(
          '2000ms ease-in',
          style({ transform: 'translateX(0%)', opacity: 0 })
        ),
      ]),

      transition(':enter', [
        style({ transform: 'translateX(0%)', opacity: 0 }),
        animate(
          '2000ms ease-in',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  name = 'Angular 6';
  step: number = 1;

  toggle(evt): void {
    this.step += 1;
  }
}
