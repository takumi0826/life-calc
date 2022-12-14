import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import {
  filter,
  first,
  map,
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { contents } from 'src/app/data/item';
import { AppService } from 'src/app/services/app.service';
import { TopService } from 'src/app/services/top.service';
import { Content } from 'src/app/types/type';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  itemList: Content[] = [];
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private topService: TopService) {}

  ngOnInit(): void {
    this.itemList = this.topService.getContents();
    this.loading$.next(false);
  }

  // /** カテゴリボタン押下 */
  // onSelect(selected: number) {
  //   if (selected === this.topService.selectCategory$.getValue()) {
  //     this.topService.selectCategory$.next(0);
  //     return;
  //   }
  //   this.topService.selectCategory$.next(selected);
  // }

  trackCard(index: any) {
    return index;
  }
}
