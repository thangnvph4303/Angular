import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from 'src/layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AdminLayoutComponent } from 'src/layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent
      },
      { path: "about", component: AboutPageComponent
      },
      { path: "product", component: ProductPageComponent
      },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full"},
      { path: "dashboard", component: DashboardComponent},
      { path: "product", component: AdminProductComponent}
    ]
  },
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
