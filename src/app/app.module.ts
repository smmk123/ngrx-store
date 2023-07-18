import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/products/products.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/products/products.effects';
import { LoginPageComponent } from './login-page/login-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    HeroSectionComponent,
    ProductsPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    CarouselModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({products: productReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
