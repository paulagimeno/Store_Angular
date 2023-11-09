import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: ProductListComponent
  },
  {
    path: 'product-edit',
    component: ProductEditComponent
  }, 
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path: '*', redirectTo: '/product-list', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/product-edit', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
