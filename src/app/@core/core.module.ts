import { AuthGuardService } from './../services/auth-guard.service';
import { RoleProvider } from './../providers/role.provider';
import { CylInterceptor } from './../providers/cyl-interceptor';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAuthModule,
  NbAuthJWTToken,
  NbPasswordAuthStrategy,
} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'socicon-twitter',
  },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: 'http://back.tmp/api',
        login: {
          endpoint: '/login',
          method: 'post',
        },
        register: {
          endpoint: '/auth/sign-up',
          method: 'post',
        },
        logout: {
          endpoint: '/auth/sign-out',
          method: 'post',
        },
        requestPass: {
          endpoint: '/auth/request-pass',
          method: 'post',
        },
        resetPass: {
          endpoint: '/auth/reset-pass',
          method: 'post',
        },
        token: {
          class: NbAuthJWTToken,
          key: 'access_token',
        },
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: [],
      },
      user: {
        parent: 'guest',
        view: ['news', 'comments'],
        create: 'comments',
      },
      moderator: {
        parent: 'user',
        create: 'news',
        remove: '*',
      },
    },
  }).providers,
  { provide: NbRoleProvider, useClass: RoleProvider },
  { provide: HTTP_INTERCEPTORS, useClass: CylInterceptor, multi: true },
  AnalyticsService,
  AuthGuardService,
];

@NgModule({
  imports: [CommonModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
