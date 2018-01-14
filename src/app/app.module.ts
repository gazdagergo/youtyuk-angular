import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { FarmersComponent } from './farmers/farmers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FarmersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
