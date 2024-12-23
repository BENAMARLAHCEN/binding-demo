import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  template: `
    <div class="binding-card">
      <div class="card-header">
        <h3>String Interpolation</h3>
        <span class="syntax-hint">Syntax: {{ '{{ expression }}' }}</span>
      </div>
      
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
    .example-row {
      margin: 15px 0;
    }
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
