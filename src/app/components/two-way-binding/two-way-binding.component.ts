import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="binding-card">
      <div class="card-header">
        <h3>Two-way Binding</h3>
        <span class="syntax-hint">Syntax: [(ngModel)]="property"</span>
      </div>

      <div class="card-content">
        <div class="example-row">
          <h4>User Form:</h4>
          <div class="form-group">
            <label>Name:</label>
            <input [(ngModel)]="user.name" placeholder="Enter name">
          </div>
          
          <div class="form-group">
            <label>Email:</label>
            <input [(ngModel)]="user.email" placeholder="Enter email">
          </div>

          <div class="form-group">
            <label>Preferences:</label>
            <select [(ngModel)]="user.preference">
              <option value="light">Light Theme</option>
              <option value="dark">Dark Theme</option>
            </select>
          </div>
        </div>

        <div class="example-row preview-box">
          <h4>Live Preview:</h4>
          <p>Name: {{ user.name }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Theme Preference: {{ user.preference }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-group {
      margin: 15px 0;
    }
    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: #2c3e50;
    }
    .form-group input, .form-group select {
      width: 100%;
      padding: 8px;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
    }
    .preview-box {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
    }
  `]
})
export class TwoWayBindingComponent {
  user = {
    name: '',
    email: '',
    preference: 'light'
  };
}