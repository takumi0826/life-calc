import { Injectable } from '@angular/core';
import { contents, itemImage } from '../data/item';
import { Content } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  getContents(): Content[] {
    return contents;
  }
  public getItemImage() {
    const randam = Math.floor(Math.random() * itemImage.length);
    const image = itemImage[randam];
    return image;
  }
}
