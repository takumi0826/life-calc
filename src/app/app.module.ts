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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
