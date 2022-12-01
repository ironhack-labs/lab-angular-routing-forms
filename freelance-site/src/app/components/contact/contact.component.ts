import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  nameInput: FormControl;
  occupationInput: FormControl;
  emailInput: FormControl;
  subjectInput: FormControl;
  messageInput: FormControl;

  
  constructor(){

    this.nameInput = new FormControl("", Validators.required);
    this.occupationInput = new FormControl("");
    //MAKE EMAIL REQUIRED
    this.emailInput = new FormControl("", Validators.required);
    this.subjectInput = new FormControl("", Validators.required);
    this.messageInput = new FormControl("", Validators.required);

    this.registerForm = new FormGroup(
      {
        name: this.nameInput,
        occupation: this.occupationInput,
        email: this.emailInput,
        subject: this.subjectInput,
        message: this.messageInput,
      }
    )
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert("Thanks for contacting us");
    this.registerForm.reset()
    for (let field in this.registerForm.controls) {
      this.registerForm.controls[field].clearValidators();
      this.registerForm.controls[field].updateValueAndValidity();
    }
  }
}
