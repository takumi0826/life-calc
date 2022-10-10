import { Component, Input, OnInit } from '@angular/core';
import { TopService } from 'src/app/services/top.service';
import { Content } from 'src/app/types/type';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent implements OnInit {
  @Input() item!: Content;
  cardImage = '';

  constructor(private topService: TopService) {}

  ngOnInit(): void {
    this.cardImage = this.topService.getItemImage();
  }
}
