import { Component, OnInit } from '@angular/core';
import { PageConst } from 'src/app/constants/page.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  title = PageConst.TOP;

  constructor() {}
}
