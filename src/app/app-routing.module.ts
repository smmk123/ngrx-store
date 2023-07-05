import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'products', component: ProductsPageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
