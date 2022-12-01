import { HtmlTagDefinition } from '@angular/compiler';
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
  // inputLength: number = this.textArea.value.length
  formName: string = ''
  formOccupation: string = ''
  formEmail: string = ''
  formSubject: string = ''
  formMessage: string = ''

  constructor() {
    this.nameInput = new FormControl('', [
      Validators.required,
    ]);
    this.subjectInput = new FormControl('', [
      Validators.required,
    ]);
    this.occupationInput = new FormControl('', []);

    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.contentInput = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ])

    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      occupation: this.occupationInput,
      subject: this.subjectInput,
      content: this.contentInput
    });
  }


  onSubmit(): void {
    console.log('User created...');
    this.registerForm.reset()
  }
}
