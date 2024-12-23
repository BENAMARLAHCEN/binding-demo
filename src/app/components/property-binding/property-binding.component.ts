import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  template: `
    <div class="binding-card">
      <div class="card-header">
        <h3>Property Binding</h3>
        <span class="syntax-hint">Syntax: [property]="expression"</span>
      </div>

      <div class="card-content">
        <div class="example-row">
          <h4>Button States:</h4>
          <button [disabled]="isDisabled" 
                  [class.primary-btn]="!isDisabled"
                  [style.opacity]="isDisabled ? 0.5 : 1"
                  (click)="toggleButton()">
            {{ isDisabled ? 'Disabled Button' : 'Active Button' }}
          </button>
        </div>

        <div class="example-row">
          <h4>Dynamic Styles:</h4>
          <div [style.background-color]="backgroundColor"
               [style.padding.px]="padding"
               [style.border-radius.px]="borderRadius"
               class="style-box">
            Styled with Property Binding
          </div>
        </div>

        <div class="example-row">
          <h4>Dynamic Image:</h4>
          <img [src]="imageUrl" 
               [alt]="imageAlt"
               [width]="imageWidth">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .style-box {
      margin: 10px 0;
      color: white;
      text-align: center;
    }
    .primary-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class PropertyBindingComponent {
  isDisabled = false;
  backgroundColor = '#2ecc71';
  padding = 20;
  borderRadius = 8;
  imageUrl = '/api/placeholder/200/150';
  imageAlt = 'Demo Image';
  imageWidth = 200;

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }
}