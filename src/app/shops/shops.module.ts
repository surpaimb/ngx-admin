import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NgModule } from '@angular/core';

import { ShopsComponent } from './shops.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { ShopsRoutingModule } from './shops-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const SHOPS_COMPONENTS = [ShopsComponent];

@NgModule({
  imports: [
    ShopsRoutingModule,
    ThemeModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [...SHOPS_COMPONENTS],
})
export class ShopsModule {}
