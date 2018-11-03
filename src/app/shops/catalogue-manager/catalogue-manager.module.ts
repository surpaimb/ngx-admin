import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {
  CatalogueManagerRoutingModule,
  RoutedComponents,
} from './catalogue-manager-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [ThemeModule, CatalogueManagerRoutingModule, Ng2SmartTableModule],
  declarations: [...RoutedComponents],
  providers: [SmartTableService],
})
export class CatalogueManagerModule {}
