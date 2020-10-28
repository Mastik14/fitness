import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { Store } from 'src/store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
  apiKey: "AIzaSyCXz7GrHLBs-xlsCrr185iG4v4UrNreq2Y",
  authDomain: "fitness-app-e668a.firebaseapp.com",
  databaseURL: "https://fitness-app-e668a.firebaseio.com",
  projectId: "fitness-app-e668a",
  storageBucket: "fitness-app-e668a.appspot.com",
  messagingSenderId: "1014564696462"
};
*/