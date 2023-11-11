import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductListComponent
  },
  { 
    path: 'product-detail/:id', 
    component: ProductDetailComponent 
  },
  { 
    path: 'product-edit/:id', 
    component: ProductEditComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
