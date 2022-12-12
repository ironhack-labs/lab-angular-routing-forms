import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  occupationInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;
  succesfulMessage: string;

  /* ------- Constructor -------- */
  constructor() {
    this.nameInput = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.email,
    ]);
    this.occupationInput = new FormControl('');
    this.subjectInput = new FormControl('', Validators.required);
    this.contentInput = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]);

    /* ----- Form object with data ----- */
    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      occupation: this.occupationInput,
      subject: this.subjectInput,
      content: this.contentInput,
    });
    this.succesfulMessage = '';
  }
  /* ------- Mwthods -------- */
  onSubmit(): void {
    console.log(
      `obj-submit:{ 
      _name: ${this.nameInput.value} 
      _email: ${this.emailInput.value}  
      _occupation: ${this.occupationInput.value}  
      _subject: ${this.subjectInput.value}  
      _content: ${this.contentInput.value}  
    }`
    );
    this.succesfulMessage = 'Thanks for getting in contact with us';
    this.nameInput.reset({ value: '', disabled: true });
    this.emailInput.reset({ value: '', disabled: true });
    this.occupationInput.reset({ value: '', disabled: true });
    this.subjectInput.reset({ value: '', disabled: true });
    this.contentInput.reset({ value: '', disabled: true });
    setTimeout(() => {
      this.succesfulMessage = '';
      window.location.reload();
    }, 4000);
  }
}
