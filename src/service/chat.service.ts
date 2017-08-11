import { ChatMessage } from './../app/models/chat.model';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'
@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  constructor(private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(auth => {
    //   if (auth !== undefined && auth != null) {
    //     this.user = auth;
    //   }
    // });

  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = "jerry.ho.1938@gmail.com";
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: 'test-user',
      email: email
    });
    console.log('Calling send message');

  }
  //convert time function
  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds()
    return (date + ' ' + time);
  }
  //talk with FireBase
  getMessages(): FirebaseListObservable<ChatMessage[]> {
    //get messages object from Firebase
    return this.db.list('messages', {
      query: {
        //get 25 records
        limitToLast: 25,
        //order record by key
        orderByKey: true
      }
    });
  }
}


