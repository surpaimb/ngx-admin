import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {
  CustomersRoutingModule,
  RoutedComponents,
} from './customers-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [ThemeModule, CustomersRoutingModule, Ng2SmartTableModule],
  declarations: [...RoutedComponents],
  providers: [SmartTableService],
})
export class CustomersModule {}
