import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validator';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  registerForm: FormGroup;
  nameInput: FormControl;
  occupationInput: string;
  emailInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;
  isValid = false;

  constructor() {
    this.nameInput = new FormControl('', [Validators.required]);
    this.occupationInput = ' ';
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.subjectInput = new FormControl('', [Validators.required]);
    this.contentInput = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]);
    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      subject: this.subjectInput,
      content: this.contentInput,
    });
  }

  onSubmit(): void {
    console.log('User created...');
    this.isValid = true;
    this.registerForm.reset();
    for (let field in this.registerForm.controls) {
      this.registerForm.controls[field].clearValidators();
      this.registerForm.controls[field].updateValueAndValidity();
    }
  }
}
