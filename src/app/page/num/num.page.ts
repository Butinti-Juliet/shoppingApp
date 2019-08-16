import { Component, OnInit } from '@angular/core';
import { PhoneNumber } from 'src/app/module/phone';
import * as firebase from 'firebase';
import { WindowService } from 'src/app/service/window.service';

@Component({
  selector: 'app-num',
  templateUrl: './num.page.html',
  styleUrls: ['./num.page.scss'],
})
export class NumPage implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  constructor(private win: WindowService) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
