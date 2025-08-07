import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ThemeSwitcher } from '../../theme/theme-switcher';
import { Logo } from '../logo/logo';

@Component({
  selector: 'aero-banner',
  imports: [Logo, RouterLink, MatButton, ThemeSwitcher],
  template: `<a routerLink="/" mat-button="text">
      <aero-logo matButtonIcon />
      <span>Aerosaltant</span>
    </a>
    <aero-theme-switcher />`,
  styles: `
    @use '@angular/material' as mat;
    :host {
      display: flex;
      height: 48px;
      padding-inline: 4px;
      background-color: var(--mat-sys-surface-container-lowest);
      align-items: center;
    }

    aero-logo {
      margin-inline-end: 8px;
    }

    a:has(aero-logo) {
      @include mat.button-overrides((
        text-label-text-color: var(--mat-sys-on-surface),
        text-label-text-size: var(--mat-sys-title-medium-size),
        text-label-text-weight: var(--mat-sys-title-medium-weight),
      ))
    }

    aero-theme-switcher {
      margin-inline-start: auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'banner',
  },
})
export class Banner {}
