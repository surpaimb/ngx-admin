import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderProcessingComponent } from './order-processing.component';
import { ShippingListComponent } from './shipping-list/shipping-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrderProcessingComponent,
    children: [
      {
        path: 'index',
        component: OrderListComponent,
      },
      {
        path: 'shipping',
        component: ShippingListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderProcessingRoutingModule {}

export const RoutedComponents = [
  OrderProcessingComponent,
  ShippingListComponent,
  OrderListComponent,
];
