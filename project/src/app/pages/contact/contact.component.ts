import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    
    name: FormControl
    email: FormControl
    subject: FormControl
    occupation: FormControl
    content: FormControl
    
    registerForm: FormGroup


    constructor() {
        this.name = new FormControl('', Validators.required)
        this.email = new FormControl('', [Validators.required, Validators.email])
        this.subject = new FormControl('', Validators.required)
        this.occupation = new FormControl('')
        this.content = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])

        this.registerForm = new FormGroup({
            name: this.name, 
            email: this.email, 
            subject: this.subject, 
            occupation: this.occupation, 
            content: this.content
        })
    }

    onSubmit(e: Event): void {
        e.preventDefault()
        this.registerForm.reset()
        alert('Successfuly sended')
    }
}
