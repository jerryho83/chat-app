
import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from './../../service/chat.service';
import { ChatMessage } from './../models/chat.model';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;
  constructor(private chatServive: ChatService) {

  }
  ngOnInit() {
    console.log('feed init');
    this.feed = this.chatServive.getMessages();
  }
  ngOnChanges() {
    this.feed = this.chatServive.getMessages();
  }
}
