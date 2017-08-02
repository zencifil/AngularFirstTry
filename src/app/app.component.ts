import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthModule } from "app/auth/auth.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPage = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: AuthModule.apiKey,
      authDomain: AuthModule.authDomain
    });
  }

  onNavigate(page: string) {
    this.loadedPage = page;
  }
}
