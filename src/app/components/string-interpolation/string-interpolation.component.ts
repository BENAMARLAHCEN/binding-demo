import { Component } from '@angular/core';
import { CardHeaderComponent } from '../shared/card-header.component';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [CardHeaderComponent],
  template: `
    <div class="binding-card">
      <app-card-header title="String Interpolation" syntax="{{ '{{ expression }}' }}"></app-card-header>
      <div class="card-content">
        <div class="example-row">
          <p>User Profile:</p>
          <ul>
            <li>Name: {{ name }}</li>
            <li>Age: {{ age }}</li>
            <li>Email: {{ email }}</li>
            <li>Join Date: {{ getFormattedDate() }}</li>
          </ul>
        </div>
        <div class="example-row">
          <p>Calculated Values:</p>
          <ul>
            <li>Age in Days: {{ age * 365 }}</li>
            <li>Status: {{ isActive ? 'Active' : 'Inactive' }}</li>
            <li>Current Time: {{ getCurrentTime() }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    ul {
      list-style-type: none;
      padding-left: 20px;
    }
    li {
      margin: 8px 0;
      color: #2c3e50;
    }
  `]
})
export class StringInterpolationComponent {
  name = 'John Doe';
  age = 25;
  email = 'john@example.com';
  isActive = true;
  joinDate = new Date(2023, 0, 15);

  getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  getFormattedDate() {
    return this.joinDate.toLocaleDateString();
  }
}
