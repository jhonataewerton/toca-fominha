import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() id!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Input() color: 'primary' | 'light' = 'light';
}
