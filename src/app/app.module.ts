import { environment } from './../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { ChatService } from './../service/chat.service';
import { appRoutes } from './../route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserItemComponent } from './user-item/user-item.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    UserItemComponent,
    NavbarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  //service put in provider
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
