import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { Title } from '@angular/platform-browser';
import { PageConst } from 'src/app/constants/page.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDark$ = this.appService.isDark.asObservable();
  constructor(private appService: AppService, public dialog: MatDialog) {}

  changeMode() {
    this.appService.isDark.next(!this.appService.isDark.getValue());
    const el = document.documentElement;
    el.classList.contains('dark')
      ? el.classList.remove('dark')
      : el.classList.add('dark');
  }
}
