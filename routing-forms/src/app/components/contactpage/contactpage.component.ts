import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent {
  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  occupationInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl

  // It will have the fields name, occupation, email, subject, and content.
  // Every field is required but occupation.
  // Content must be a textarea field and has a minimum length of 10 and a maximum length of 255 characters.
  // You must highlight all invalid fields and show error messages.
  // The email must be a valid email address.
  // After successful submission, you must show a success message and clear the form.
  constructor() {
    this.nameInput = new FormControl('', [
      Validators.required,
    ]);
    this.subjectInput = new FormControl('', [
      Validators.required,
    ]);
    this.occupationInput = new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(255),
    ])
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.contentInput = new FormControl('', [
      Validators.required,
    ])

    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      occupationInput: this.occupationInput,
      subjectInput: this.subjectInput,
      contentInput: this.contentInput
    });
  }


  onSubmit(): void {
    console.log('User created...');
    this.nameInput = new FormControl('', []);
  }
}
