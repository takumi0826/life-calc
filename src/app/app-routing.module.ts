import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLinkConst } from './constants/page.const';
import { IncomeComponent } from './pages/income/income.component';
import { ResidentsComponent } from './pages/residents/residents.component';
import { TopComponent } from './pages/top/top.component';
import { TripComponent } from './pages/trip/trip.component';

const routes: Routes = [
  { path: PageLinkConst.TOP, component: TopComponent, title: 'ライフブック!' },
  {
    path: PageLinkConst.TRIP,
    component: TripComponent,
    title: '全国旅行割シミュレーター',
  },
  {
    path: PageLinkConst.INCOME,
    component: IncomeComponent,
    title: '所得税シミュレーター',
  },
  {
    path: PageLinkConst.RESIDENTS,
    component: ResidentsComponent,
    title: '住民税シミュレーター',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
