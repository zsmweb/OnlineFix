import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  dark = true;

  navItems = [
    {name: 'Autocomplete', route: 'autocomplete'},
    {name: 'Button', route: 'button'},
    {name: 'Button Toggle', route: 'button-toggle'},
    {name: 'Card', route: 'card'},
    {name: 'Chips', route: 'chips'},
    {name: 'Checkbox', route: 'checkbox'},
    {name: 'Datepicker', route: 'datepicker'},
    {name: 'Dialog', route: 'dialog'},
    {name: 'Gestures', route: 'gestures'},
    {name: 'Grid List', route: 'grid-list'},
    {name: 'Icon', route: 'icon'},
    {name: 'Input', route: 'input'},
    {name: 'List', route: 'list'},
    {name: 'Menu', route: 'menu'},
    {name: 'Live Announcer', route: 'live-announcer'},
    {name: 'Overlay', route: 'overlay'},
    {name: 'Portal', route: 'portal'},
    {name: 'Progress Bar', route: 'progress-bar'},
    {name: 'Progress Spinner', route: 'progress-spinner'},
    {name: 'Radio', route: 'radio'},
    {name: 'Ripple', route: 'ripple'},
    {name: 'Select', route: 'select'},
    {name: 'Sidenav', route: 'sidenav'},
    {name: 'Slider', route: 'slider'},
    {name: 'Slide Toggle', route: 'slide-toggle'},
    {name: 'Snack Bar', route: 'snack-bar'},
    {name: 'Tabs', route: 'tabs'},
    {name: 'Toolbar', route: 'toolbar'},
    {name: 'Tooltip', route: 'tooltip'},
    {name: 'Platform', route: 'platform'},
    {name: 'Style', route: 'style'}
  ];
}
