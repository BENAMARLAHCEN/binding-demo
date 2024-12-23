import { Component } from '@angular/core';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  template: `
    <div class="container">
      <header>
        <h1>Angular Data Binding Examples</h1>
        <p class="subtitle">Interactive examples of different binding types</p>
      </header>
      <main>
        <app-string-interpolation></app-string-interpolation>
        <app-property-binding></app-property-binding>
        <app-event-binding></app-event-binding>
        <app-two-way-binding></app-two-way-binding>
      </main>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {}
