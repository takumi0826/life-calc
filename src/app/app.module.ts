import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripComponent } from './pages/trip/trip.component';
import { TopComponent } from './pages/top/top.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { SideNavComponent } from './parts/side-nav/side-nav.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './pages/base/base.component';
import { CheckLengthPipe } from './pipes/check-length.pipe';
import { TopCardComponent } from './parts/top-card/top-card.component';
import { ThreePointLeaderPipe } from './pipes/three-point-leader.pipe';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ScrollTopComponent } from './parts/scroll-top/scroll-top.component';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { IncomeComponent } from './pages/income/income.component';
import { ResidentsComponent } from './pages/residents/residents.component';
import { LoadingComponent } from './parts/loading/loading.component';
import { ImageLoadDirective } from './directive/image-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TopComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    BaseComponent,
    CheckLengthPipe,
    TopCardComponent,
    ThreePointLeaderPipe,
    ScrollTopComponent,
    IncomeComponent,
    ResidentsComponent,
    LoadingComponent,
    ImageLoadDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxScrollTopModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
