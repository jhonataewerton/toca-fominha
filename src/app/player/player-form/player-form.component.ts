import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss',
})
export class PlayerFormComponent {
  playerForm: FormGroup;
  private readonly onDestroy$ = new Subject<void>();
  constructor(private _fb: FormBuilder) {
    this.playerForm = this._fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      isDaily: ['', Validators.required],
    });
  }

  get nameControl(): FormControl {
    return this.playerForm.get('name') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.playerForm.get('lastName') as FormControl;
  }

  get isDailyControl(): FormControl {
    return this.playerForm.get('isDaily') as FormControl;
  }
}
