import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './widgets/main-page/main-page.component';
import { GetStartedComponent } from './components/get-started/get-started/get-started.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AdminLoginComponent } from './components/auth/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GetStartedComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
