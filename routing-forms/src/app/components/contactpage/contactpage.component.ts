import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatSnackBar, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

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
  formName: string = ''
  formOccupation: string = ''
  formEmail: string = ''
  formSubject: string = ''
  formMessage: string = ''
  success: boolean = false
  // verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(private _snackBar: MatSnackBar) {
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

  //This would not close even though it should so I use a normal success message
  openSnackBar(message: string, action: string) {
    //   this._snackBar.open(message, action, {
    //     verticalPosition: this.verticalPosition,
    //     duration: 3000,
    //   });
  }

  onSubmit(): void {
    this.registerForm.reset()
    console.log('User created...');
    console.log(this.success);
  }
}
