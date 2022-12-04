import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;

  completeNameInput: FormControl;
  occupationInput: FormControl;
  emailInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;
  succesMessage: string;

  constructor(){
    this.completeNameInput = new FormControl('', Validators.required),
    this.occupationInput = new FormControl(''),
    this.emailInput = new FormControl('', [Validators.required, Validators.email]),
    this.subjectInput = new FormControl('', Validators.required),
    this.contentInput = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
    this.succesMessage = "";
    this.registerForm = new FormGroup({
      name: this.completeNameInput,
      occupation: this.occupationInput,
      email: this.emailInput,
      subject: this.subjectInput,
      content: this.contentInput

    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.succesMessage = "Contact message sended";
    this.registerForm.reset()
    
  }

}
