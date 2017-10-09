import { Injectable } from '@angular/core';

@Injectable()
export class WebsocketService {
  exampleSocket: WebSocket;
  title = 'app';
  url = 'ws://10.211.55.3:9002';
  subscriptions = [];

  constructor() {
    this.exampleSocket = new WebSocket(this.url);
    this.exampleSocket.onopen = event => {
      console.log('socket is open');
      this.sendSubscribe(this.subscriptions);
    };

    this.exampleSocket.onmessage = function(msg) {
      console.log('RECEIVED_MESSAGE:', msg);
    };
  }

  sendMessage() {
    this.sendSubscribe(this.subscriptions);
    // this.exampleSocket.send('testmessage');
  }

  sendSubscribe(keys: any) {
    const msg = {
      topic: 'subscribe',
      key: keys,
    };
    const msgToSend = JSON.stringify(msg);
    console.log('send subscription');
    console.log('message to send:', msgToSend);
    this.exampleSocket.send(msgToSend);
  }
}
