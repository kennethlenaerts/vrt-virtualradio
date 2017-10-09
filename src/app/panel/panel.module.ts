import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as panel from './';

@NgModule({
  imports: [CommonModule],
  declarations: [
    panel.SoundPanelComponent,
    panel.SoundSearchComponent,
    panel.SoundListComponent,
    panel.PlaylistPanelComponent,
    panel.PlaylistComponent,
    panel.PlaylistSearchComponent,
    panel.LaunchpadPanelComponent,
    panel.LaunchpadHeaderComponent,
    panel.LaunchpadGridComponent,
    panel.LaunchpadItemComponent,
    panel.FaderPanelComponent,
    panel.ChannelStripComponent,
  ],
})
export class PanelModule {}
