import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Banner } from './core/layout/banner/banner';

@Component({
  imports: [RouterModule, Banner],
  selector: 'aero-root',
  template: `<aero-banner /><router-outlet></router-outlet>`,
  styles: `
    :host {
      display: block;
      position: relative;
    }
    aero-banner {
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  `,
})
export class App {}
