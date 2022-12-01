import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  subjects: string[];

  contactForm: FormGroup;
  nameInput: FormControl;
  occupationInput: FormControl;
  emailInput: FormControl;
  contentInput: FormControl;
  subjectInput: FormControl;

  constructor() {
    this.subjects = ['more info', 'prices', 'other'];

    this.nameInput = new FormControl('', [
      Validators.required
    ]);
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    
    this.occupationInput = new FormControl();

    this.contentInput = new FormControl('', [
      Validators.required,
      Validators.minLength(10), Validators.maxLength(255)
    ]);
    this.subjectInput = new FormControl('', Validators.required);

    this.contactForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      occupation: this.occupationInput,
      content: this.contentInput,
      subject: this.subjectInput,
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert("Thanks for contacting us!")
    this.contactForm.reset();
}
}



