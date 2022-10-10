import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './pages/top/top.component';
import { TripComponent } from './pages/trip/trip.component';

const routes: Routes = [
  { path: '', component: TopComponent, title: 'ライフブック!' },
  { path: 'trip', component: TripComponent, title: '全国旅行割シミュレーター' },
  // { path: 'delete', component: DeleteDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
