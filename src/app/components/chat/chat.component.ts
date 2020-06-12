import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Initaitor } from '../../models/enums';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  public selected = 0;

  public Initiator = Initaitor;
  public message;
  @ViewChild(NgScrollbar, { static: true }) scrollable: NgScrollbar;

  public data = [
    { name: 'Akhil Naidu', chat: 'Hello this is akhil? and I am going well' },
    { name: 'Mark Hendry', chat: 'Hello this is Mark Hendry' },
    { name: 'Undertaker', chat: 'Hello this is Undertaker' },
    { name: 'John Doe', chat: 'Hello this is John' }
  ];

  public chatting = [
    { name: 'Akhil Naidu', time: '12:57pm', chat: 'Hello how are you?', initiator: Initaitor.SENDER },
    { name: 'Rohit', time: '12:58pm', chat: 'Hi I am fine', initiator: Initaitor.RECEIVER },
    { name: 'Ganga', time: '12:59pm', chat: 'Great and whats hoing on', initiator: Initaitor.SENDER },
    { name: 'Manga', time: '01:00pm', chat: 'everything is good', initiator: Initaitor.SENDER }
  ];

  ngOnInit(): void {
  }

  public setSelected(index: number) {
    this.selected = index;
  }

  public sendMessage() {
    if (this.message) {
      this.chatting.push({
        name: 'Akhil Naidu',
        chat: this.message,
        initiator: this.Initiator.SENDER,
        time: '12:00pm'
      });

      setTimeout(() => {
        this.scrollable.scrollTo({ bottom: 0, duration: 0 });
      }, 0);
    }
  }

}
