import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  user = {} as User;


  constructor(private afAuth: AngularFireAuth) { 



  }

  ngOnInit() {
  }
 async register(user: User){
   try{
  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
 console.log(result);
}
 catch(e){
   console.error(e);
 }
}
}
