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

  // add text area?
  
  constructor(){

    this.nameInput = new FormControl("", Validators.required);
    this.occupationInput = new FormControl("", Validators.required);
    this.emailInput = new FormControl("", Validators.required);
    this.subjectInput = new FormControl("", Validators.required);

    this.registerForm = new FormGroup(
      {
        name: this.nameInput,
        occupation: this.occupationInput,
        email: this.emailInput,
        subject: this.subjectInput,
      }
    )
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log("Contact request sent");
  }
}
