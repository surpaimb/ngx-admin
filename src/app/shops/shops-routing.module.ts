import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShopsComponent } from './shops.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ShopsComponent,
    children: [
      {
        path: 'dashboard',
        component: ECommerceComponent,
      },
      {
        path: 'catalogue-manager',
        loadChildren:
          './catalogue-manager/catalogue-manager.module#CatalogueManagerModule',
      },
      {
        path: 'order-processing',
        loadChildren:
          './order-processing/order-processing.module#OrderProcessingModule',
      },
      {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopsRoutingModule {}
