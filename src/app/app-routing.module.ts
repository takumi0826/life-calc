import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLinkConst } from './constants/page.const';
import { NengoComponent } from './pages/nengo/nengo.component';
import { IncomeComponent } from './pages/income/income.component';
import { ResidentsComponent } from './pages/residents/residents.component';
import { TaxiComponent } from './pages/taxi/taxi.component';
import { TopComponent } from './pages/top/top.component';
import { TripComponent } from './pages/trip/trip.component';
import { VegetableComponent } from './pages/vegetable/vegetable.component';
import { AnimalAgeComponent } from './pages/animal-age/animal-age.component';

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
  // {
  //   path: PageLinkConst.TAXI,
  //   component: TaxiComponent,
  //   title: 'タクシー料金 計算',
  // },
  {
    path: PageLinkConst.RESIDENTS,
    component: ResidentsComponent,
    title: '住民税シミュレーター',
  },
  {
    path: PageLinkConst.NENGO,
    component: NengoComponent,
    title: '和暦西暦　早見表',
  },
  {
    path: PageLinkConst.VEGETABLE,
    component: VegetableComponent,
    title: '野菜保存方法・期限　早見表',
  },
  {
    path: PageLinkConst.ANIMALS,
    component: AnimalAgeComponent,
    title: '犬・猫などの年齢を人間に例えると何歳？年齢早見表',
  },
  { path: '**', component: TopComponent, title: 'ライフブック!' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
