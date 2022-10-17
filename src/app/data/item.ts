import { PageLinkConst } from '../constants/page.const';
import { Content } from '../types/type';

/** 画像 */
export const itemImage = [
  'cat-3508695_640.png',
  'dog-3508706_640.png',
  'eagle-3508696_640.png',
  'lion-5199769_640.png',
  'tiger-3515349_640.png',
  'bear-3508700_640.png',
];

export const contents: Content[] = [
  {
    id: 1,
    title: '全国旅行割シミュレーター',
    content:
      '全国旅行支援が2022/10/11からスタートします。いくらお得になるのかが分かるツールを使用して計算してみよう！※終了予定は12月下旬まで',
    link: `/${PageLinkConst.TRIP}`,
    category: {
      id: 1,
      name: 'a',
    },
    img: {
      src: '',
      alt: '動物の画像',
    },
  },
  {
    id: 2,
    title: '所得税シミュレーター',
    content:
      '年収から所得税を計算するシミュレーターです。実際の税額とは異なる場合があります。目安としてご利用ください。',
    link: `/${PageLinkConst.INCOME}`,
    category: {
      id: 1,
      name: 'b',
    },
    img: {
      src: '',
      alt: '動物の画像',
    },
  },
  // {
  //   id: 3,
  //   title: 'タクシー料金　計算',
  //   content: '距離(km)を入力すると料金を算出します。',
  //   link: PageLinkConst.TAXI,
  //   category: {
  //     id: 1,
  //     name: 'b',
  //   },
  //   img: {
  //     src: '',
  //     alt: '動物の画像',
  //   },
  // },
  {
    id: 4,
    title: '住民税シミュレーター',
    content:
      '年収から住民税を計算するシミュレーターです。実際の税額とは異なる場合があります。目安としてご利用ください。',
    link: `/${PageLinkConst.RESIDENTS}`,
    category: {
      id: 1,
      name: 'b',
    },
    img: {
      src: '',
      alt: '動物の画像',
    },
  },
  // {
  //   id: 4,
  //   title: 'ふるさと納税 上限額シミュレーター',
  //   content:
  //     '年収からふるさと納税の上限額を計算するシミュレーターです。目安としてご利用ください。',
  //   link: PageLinkConst.RESIDENTS,
  //   category: {
  //     id: 1,
  //     name: 'b',
  //   },
  //   img: {
  //     src: '',
  //     alt: '動物の画像',
  //   },
  // },
];
