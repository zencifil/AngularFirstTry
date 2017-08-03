import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthStatic } from "app/auth/auth.static";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPage = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: AuthStatic.apiKey,
      authDomain: AuthStatic.authDomain
    });
  }

  onNavigate(page: string) {
    this.loadedPage = page;
  }
}
