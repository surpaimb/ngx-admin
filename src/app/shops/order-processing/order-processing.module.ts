import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {
  OrderProcessingRoutingModule,
  RoutedComponents,
} from './order-processing-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [ThemeModule, OrderProcessingRoutingModule, Ng2SmartTableModule],
  declarations: [...RoutedComponents],
  providers: [SmartTableService],
})
export class OrderProcessingModule {}
