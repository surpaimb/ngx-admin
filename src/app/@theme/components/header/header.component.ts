import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input()
  position = 'normal';

  user: any;

  userMenu = [
    {
      title: 'Profile',
      icon: 'ion-person',
      link: '/pages/iot-dashboard',
    },
    {
      title: 'Log out',
      icon: 'ion-log-out',
      link: '/auth/logout',
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private authService: NbAuthService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthToken) => {
      if (token.isValid()) {
        // this.getPayload();
        // console.log(token.getPayload());
      }
    });
  }

  ngOnInit() {
    // this.userService
    //   .getUsers()
    //   .subscribe((users: any) => (this.user = users.nick));
    this.getPayload();
  }

  getPayload() {
    this.userService.getUser().subscribe((user: any) => {
      this.user = user.data;
      // console.log(this.user);
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
