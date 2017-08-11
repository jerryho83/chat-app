import { ChatService } from './../../service/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }
  send() {
    this.chatService.sendMessage(this.message);
    //set form empty 
    this.message='';
  }
  handleSubmit(event) {
    if (event.keyCode == 13) {
      this.send();
    }
  }
}
