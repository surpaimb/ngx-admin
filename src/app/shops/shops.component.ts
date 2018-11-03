import { Component } from '@angular/core';

import { MENU_ITEMS } from './shops-menu';

@Component({
  selector: 'ngx-shops',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class ShopsComponent {
  menu = MENU_ITEMS;
}
