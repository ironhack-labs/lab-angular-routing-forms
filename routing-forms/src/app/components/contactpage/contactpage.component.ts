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
  textArea: any = document.querySelector('#form-textArea')
  // inputLength: number = this.textArea.value.length

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
      occupation: this.occupationInput,
      subject: this.subjectInput,
      content: this.contentInput
    });
  }


  onSubmit(): void {
    console.log('User created...');
    console.log('this is the textarea', this.textArea)
    this.nameInput = new FormControl('', []);
  }
}
