import { AuthService } from './../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from './../../service/chat.service';
import { ChatMessage } from './../models/chat.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  timeStamp: Date = new Date();
  messageContent: string;
  constructor(private chatService: ChatService) {

  }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.userName;
    this.userEmail = chatMessage.email;
  }

}
