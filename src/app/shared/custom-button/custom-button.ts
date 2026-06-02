import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: false,
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss',
})
export class CustomButton {
  @Input() text = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() buttonClass = 'btn-primary';
}
