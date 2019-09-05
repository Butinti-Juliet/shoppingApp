import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';






const firebaseConfig = {
  apiKey: "AIzaSyCZWgsvBfBgQB7Lc9IkfP2oe4cJ9043uHw",
  authDomain: "shoppingapp-ffd04.firebaseapp.com",
  databaseURL: "https://shoppingapp-ffd04.firebaseio.com",
  projectId: "shoppingapp-ffd04",
  storageBucket: "shoppingapp-ffd04.appspot.com",
  messagingSenderId: "262192958477",
  appId: "1:262192958477:web:53f279b931555a52"
};


@NgModule({

  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
