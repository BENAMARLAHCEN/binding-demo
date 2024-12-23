import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-syntax-hint',
  standalone: true,
  template: `
    <span class="syntax-hint">Syntax: {{ syntax }}</span>
  `,
  styles: [`
    .syntax-hint {
      display: inline-block;
      margin-top: 5px;
      font-size: 0.9em;
      color: #7f8c8d;
    }
  `]
})
export class SyntaxHintComponent {
  @Input() syntax!: string;
}
