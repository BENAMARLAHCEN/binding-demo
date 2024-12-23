import { Component, Input } from '@angular/core';
import { SyntaxHintComponent } from './syntax-hint.component'; // Import the SyntaxHintComponent

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [SyntaxHintComponent], // Add SyntaxHintComponent to imports
  template: `
    <div class="card-header">
      <h3>{{ title }}</h3>
      <app-syntax-hint [syntax]="syntax"></app-syntax-hint>
    </div>
  `,
  styles: [`
    .card-header {
      background: #f8f9fa;
      padding: 15px 20px;
      border-bottom: 1px solid #e9ecef;
    }
    h3 {
      margin: 0;
      color: #2c3e50;
    }
  `]
})
export class CardHeaderComponent {
  @Input() title!: string;
  @Input() syntax!: string;
}
