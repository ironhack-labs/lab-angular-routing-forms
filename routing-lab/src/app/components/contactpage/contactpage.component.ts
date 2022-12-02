import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit{
  registerForm: FormGroup;
  name: FormControl;
  email: FormControl;
  occupation: FormControl;
  subject: FormControl;
  content: FormControl;

  constructor() {
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.occupation = new FormControl('', [ ]);
    this.subject = new FormControl('', [
      Validators.required
    ]);
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255)
    ]);

    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      occupation: this.occupation,
      subject: this.subject,
      content: this.content,
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log("User created...");
  }


}
