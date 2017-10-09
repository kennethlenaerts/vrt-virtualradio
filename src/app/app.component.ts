import { Component, OnInit } from '@angular/core';

import { WebsocketService } from './shared/index';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    // this.websocketService.sendSubscribe({});
  }
}
