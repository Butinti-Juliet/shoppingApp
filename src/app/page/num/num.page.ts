import { Component, OnInit } from '@angular/core';
import { PhoneNumber } from 'src/app/module/phone';
import * as firebase from 'firebase';
import { WindowService } from 'src/app/service/window.service';


const firebaseConfig = {
  apiKey: "AIzaSyCZWgsvBfBgQB7Lc9IkfP2oe4cJ9043uHw",
  authDomain: "shoppingapp-ffd04.firebaseapp.com",
  databaseURL: "https://shoppingapp-ffd04.firebaseio.com",
  projectId: "shoppingapp-ffd04",
  storageBucket: "shoppingapp-ffd04.appspot.com",
  messagingSenderId: "262192958477",
  appId: "1:262192958477:web:53f279b931555a52"
};



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

  constructor(private win: WindowService) {

    // firebase.initializeApp(firebaseConfig);
   }

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
