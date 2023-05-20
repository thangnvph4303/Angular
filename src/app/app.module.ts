import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutComponent } from 'src/layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from 'src/layouts/admin-layout/admin-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    AboutPageComponent,
    ProductPageComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AdminProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
