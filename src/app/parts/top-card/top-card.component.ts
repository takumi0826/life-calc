import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { TopService } from 'src/app/services/top.service';
import { Content } from 'src/app/types/type';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent {
  @Input() item!: Content;

  constructor() {}
}
