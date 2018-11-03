import { CategoryListComponent } from './categories/category-list.component';
import { CollectionListComponent } from './collections/collection-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueManagerComponent } from './catalogue-manager.component';
import { ProductListComponent } from './products/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogueManagerComponent,
    children: [
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'categories',
        component: CategoryListComponent,
      },
      {
        path: 'collections',
        component: CollectionListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueManagerRoutingModule {}

export const RoutedComponents = [
  CatalogueManagerComponent,
  ProductListComponent,
  CategoryListComponent,
  CollectionListComponent,
];
