import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  template: `
    <div class="binding-card">
      <div class="card-header">
        <h3>Event Binding</h3>
        <span class="syntax-hint">Syntax: (event)="handler()"</span>
      </div>

      <div class="card-content">
        <div class="example-row">
          <h4>Mouse Events:</h4>
          <div class="event-box"
               (mouseenter)="onMouseEnter()"
               (mouseleave)="onMouseLeave()"
               [style.background-color]="boxColor">
            Mouse over me!
          </div>
          <p>Status: {{ mouseStatus }}</p>
        </div>

        <div class="example-row">
          <h4>Keyboard Events:</h4>
          <input (keyup)="onKeyUp($event)"
                 (focus)="onFocus()"
                 (blur)="onBlur()"
                 placeholder="Type something...">
          <p>Last Key: {{ lastKey }}</p>
          <p>Input Status: {{ inputStatus }}</p>
        </div>

        <div class="example-row">
          <h4>Counter:</h4>
          <button (click)="increment()" class="counter-btn">+</button>
          <span class="counter-value">{{ counter }}</span>
          <button (click)="decrement()" class="counter-btn">-</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .event-box {
      padding: 20px;
      text-align: center;
      border-radius: 4px;
      transition: all 0.3s;
      cursor: pointer;
    }
    .counter-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 5px 15px;
      margin: 0 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .counter-value {
      font-size: 1.2em;
      font-weight: bold;
    }
  `]
})
export class EventBindingComponent {
  boxColor = '#3498db';
  mouseStatus = 'Waiting...';
  lastKey = '';
  inputStatus = 'Ready';
  counter = 0;

  onMouseEnter() {
    this.boxColor = '#e74c3c';
    this.mouseStatus = 'Mouse is over the box';
  }

  onMouseLeave() {
    this.boxColor = '#3498db';
    this.mouseStatus = 'Mouse left the box';
  }

  onKeyUp(event: KeyboardEvent) {
    this.lastKey = (event.target as HTMLInputElement).value;
  }

  onFocus() {
    this.inputStatus = 'Input is focused';
  }

  onBlur() {
    this.inputStatus = 'Input lost focus';
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}