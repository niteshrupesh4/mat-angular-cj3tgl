import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
// custom validator to check that two fields match
export class FormsComponent implements OnInit {
  setForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializationForm();
  }

  /**
   * get : f
   * Purpose : returns form controls value
   * @return form controls
   */
  get f() {
    return this.setForm.controls;
  }

   get em() {
    return this.f.confirmEmail.errors['MustMatch'];
  }

  /**
   * Method : initializationForm
   * Purpose : First time Form initialization
   */
  initializationForm() {
    this.setForm = this._formBuilder.group(
      {
        newPassword: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
        email: ["", [Validators.required]],
        confirmEmail: ["", [Validators.required]]
      },
      {
        validator: [
          MustMatch("newPassword", "confirmPassword"),
          MustMatch("email", "confirmEmail")
        ]
      }
    );
  }

  /**
   * Method: onSubmit
   * Purpose : submit form
   */
  onSubmit() {
    debugger;
    if (this.setForm.invalid) {
      return;
    } else {
    }
  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function EmailMustMatch(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
