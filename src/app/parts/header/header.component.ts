import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark$ = this.appService.isDark.asObservable();
  title$ = this.appService.headerTitle;
  constructor(private appService: AppService, public dialog: MatDialog) {}

  ngOnInit() {
    console.log();
  }

  changeMode() {
    this.appService.isDark.next(!this.appService.isDark.getValue());
    const el = document.documentElement;
    el.classList.contains('dark')
      ? el.classList.remove('dark')
      : el.classList.add('dark');
  }
}
