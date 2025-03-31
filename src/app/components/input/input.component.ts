import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() control!: FormControl; // Controlador do formulário
  @Input() type: string = 'text'; // Tipo do input (padrão: texto)
  @Input() placeholder: string = ''; // Placeholder do input
  @Input() label: string = ''; // Label do input
  @Input() id: string = ''; // ID único para o input
}
