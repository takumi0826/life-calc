import { Component, OnInit } from '@angular/core';
import { PageConst } from 'src/app/constants/page.const';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.headerTitle.next(PageConst.TOP);
  }
}
