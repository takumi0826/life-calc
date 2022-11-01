import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss'],
})
export class VegetableComponent {
  vegetables = [
    {
      name: 'ナス',
      keep: '冷蔵',
      limit: '1週間',
      frozen: '1ヶ月',
    },
    {
      name: 'キャベツ',
      keep: '冷蔵',
      limit: '2〜3週間',
      frozen: '1ヶ月',
    },
    {
      name: 'トマト',
      keep: '冷蔵',
      limit: '7～10日',
      frozen: '1ヶ月',
    },
    {
      name: 'ニラ',
      keep: '冷蔵',
      limit: '3～4日',
      frozen: '1ヶ月',
    },
    {
      name: 'レタス',
      keep: '冷蔵',
      limit: '3〜5日',
      frozen: '1ヶ月',
    },
    {
      name: 'ブロッコリー',
      keep: '冷蔵',
      limit: '3〜4日',
      frozen: '1ヶ月',
    },
    {
      name: 'ニンジン',
      keep: '冷蔵',
      limit: '3～4日',
      frozen: '1ヶ月',
    },
    {
      name: 'ピーマン',
      keep: '冷蔵',
      limit: '3週間',
      frozen: '1ヶ月',
    },
    {
      name: 'タマネギ',
      keep: '常温',
      limit: '1週間',
      frozen: '1ヶ月',
    },
    {
      name: 'じゃがいも',
      keep: '常温',
      limit: '2〜3ヶ月',
      frozen: '1ヶ月',
    },
    {
      name: 'さつまいも',
      keep: '常温',
      limit: '1ヵ月',
      frozen: '3週間',
    },
    {
      name: 'アスパラ',
      keep: '冷蔵',
      limit: '2〜3日',
      frozen: '1ヶ月',
    },
    {
      name: 'エリンギ',
      keep: '冷蔵',
      limit: '7〜10日',
      frozen: '3週間',
    },
    {
      name: 'マイタケ',
      keep: '冷蔵',
      limit: '3〜5日',
      frozen: '3週間',
    },
    {
      name: 'しめじ',
      keep: '冷蔵',
      limit: '3〜4日',
      frozen: '1ヶ月',
    },
    {
      name: 'しいたけ',
      keep: '冷蔵',
      limit: '1週間',
      frozen: '1ヶ月',
    },
    {
      name: 'えのき',
      keep: '冷蔵',
      limit: '1週間',
      frozen: '1ヶ月',
    },
  ];

  constructor() {}
}
