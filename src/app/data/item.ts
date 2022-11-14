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

/** TOP コンテンツ*/
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
  {
    id: 5,
    title: '和暦・西暦　早見表',
    content:
      '和暦・西暦の早見表です。年号を選択して調べたい和暦・西暦を確認できます。',
    link: `/${PageLinkConst.NENGO}`,
    category: {
      id: 1,
      name: 'b',
    },
    img: {
      src: '',
      alt: '動物の画像',
    },
  },
  {
    id: 6,
    title: '野菜保存方法・期限　早見表',
    content:
      '野菜の保存方法・期限早見表です。保存方法、保存期限などを一覧で確認できます。目安としてご利用ください。',
    link: `/${PageLinkConst.VEGETABLE}`,
    category: {
      id: 1,
      name: 'b',
    },
    img: {
      src: '',
      alt: '動物の画像',
    },
  },
  {
    id: 7,
    title: '動物(イヌやネコ) 年齢 早見表',
    content: '犬や猫を人間の年齢に換算すると何歳？年齢早見表で確認してみよう！',
    link: `/${PageLinkConst.ANIMALS}`,
    category: {
      id: 1,
      name: 'b',
    },
    img: {
      src: '',
      alt: '動物の画像',
    },
  },
];
