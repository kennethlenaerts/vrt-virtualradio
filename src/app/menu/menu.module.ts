import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as menu from './';

@NgModule({
  imports: [CommonModule],
  declarations: [
    menu.HamburgerComponent,
    menu.MenuComponent,
    menu.TileListComponent,
    menu.TileComponent,
    menu.PlayerListComponent,
    menu.PlayerComponent,
    menu.ClockComponent,
  ],
})
export class MenuModule {}
