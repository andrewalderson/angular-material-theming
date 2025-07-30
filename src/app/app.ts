import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'aero-root',
  template: `<aero-nx-welcome></aero-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class App {
  protected title = 'aerosaltant';
}
