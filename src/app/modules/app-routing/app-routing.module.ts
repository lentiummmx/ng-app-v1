import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../../components/product/product.component';
import { ProductsComponent } from '../../components/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
