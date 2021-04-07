import { Component , Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent  {
  @Input() submitted = false;
  @Input() control: FormControl;
  @Input() inputName: string;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.submitted)) {
        return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      notEmpty: `This field must not be empty.`,
      required: `${this.inputName} is required.`,
      email: `Please enter a valid email address.`,
      pattern: 'Please enter a 10-digit Phone Number',
      exactLength: `${this.inputName} should be of ${validatorValue.requiredLength} characters.`,
      maxlength: `This field may not be greater than ${validatorValue.requiredLength} characters.`,
 
};
    return config[validatorName];

}
}
