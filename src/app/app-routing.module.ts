import { AuthGuardService } from './services/auth-guard.service';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {
    path: 'shops',
    canActivate: [AuthGuardService],
    loadChildren: 'app/shops/shops.module#ShopsModule',
  },
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    loadChildren: 'app/pages/pages.module#PagesModule',
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      // {
      //   path: 'register',
      //   component: NbRegisterComponent,
      // },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      // {
      //   path: 'request-password',
      //   component: NbRequestPasswordComponent,
      // },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'shops', pathMatch: 'full' },
  { path: '**', redirectTo: 'shops' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
