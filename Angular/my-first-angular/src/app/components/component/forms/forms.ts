import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule, JsonPipe],
  selector: 'app-forms',
  styleUrl: './forms.css',
  templateUrl: './forms.html',
})
export class Forms {
  username = new FormControl('');
  password = new FormControl('');

  displayDetails() {
    console.log(this.username.value);
    console.log(this.password.value);
  }

  setValues() {
    this.username.setValue('utkarsh');
    this.password.setValue('asd23d3');
  }

  // Reactive Form Group

  profileDetails = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
  });

  onSubmit() {
    console.log(this.profileDetails.value);
  }

  // Form Validation

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });

  // getter methods - short names to use in the template
  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get signupPassword() {
    return this.signupForm.get('password');
  }

  onSignup() {
    if (this.signupForm.invalid) {
      // show errors for all fields, even ones the user never touched
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log(this.signupForm.value);
  }

  // Template Driven Form

  submittedData: any = null;

  submitTemplateForm(formValue: any) {
    console.log(formValue);
    this.submittedData = formValue;
  }

  // Template Driven Form Validation

  submitValidForm(form: NgForm) {
    console.log(form.value);
    form.reset(); // clear the fields after submit
  }
}
