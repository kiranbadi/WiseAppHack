import { Component, OnInit } from '@angular/core';
import { alert, confirm, prompt, login, action, inputType } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'ns-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  moduleId: module.id,
})
export class ForgotpasswordComponent implements OnInit {

  constructor(
    private page: Page,
  ) { }

  ngOnInit() {}

  email = '';

  SubmitForgotPassswordRequest() {    
    console.info("Email id is " , this.email);
    if(!this.isValidEmail(this.email)){
       console.error("Invalid Email " , this.email);
       alert("Invalid Email");
       return false;
    }
    //TODO : Need to hook the ajax call to verify user and send him the email.
    confirm({
        title: "Confirmation",
        message: "Password Reset link will be sent to you",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
    }).then((result) => {
        // The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.
        console.info("Dialog result: " + result);
        this.email='';
    });
}

  isValidEmail(email:string) {
    if(EmailValidator.validate(this.email)){
      return true;
    } 
    return false;
  }

}
