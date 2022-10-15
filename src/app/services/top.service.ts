import { Injectable } from '@angular/core';
import { contents, itemImage } from '../data/item';
import { Content } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  getContents(): Content[] {
    return contents.map((c) => {
      const randam = Math.floor(Math.random() * itemImage.length);
      c.img.src = itemImage[randam];
      return c;
    });
  }
}
