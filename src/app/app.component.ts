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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    header {
      text-align: center;
      margin-bottom: 40px;
    }
    
    h1 {
      color: #2c3e50;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #7f8c8d;
    }
    
    .binding-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }
    
    .card-header {
      background: #f8f9fa;
      padding: 15px 20px;
      border-bottom: 1px solid #e9ecef;
    }
    
    .card-header h3 {
      margin: 0;
      color: #2c3e50;
    }
    
    .syntax-hint {
      display: inline-block;
      margin-top: 5px;
      font-size: 0.9em;
      color: #7f8c8d;
    }
    
    .card-content {
      padding: 20px;
    }
    
    .example-row {
      margin-bottom: 20px;
    }
    
    h4 {
      color: #34495e;
      margin-bottom: 10px;
    }
  `]
})
export class AppComponent {}