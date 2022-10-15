export type Content = {
  id: number;
  title: string;
  content: string;
  link: string;
  category: Category;
  img: {
    src: string;
    alt: string;
  };
};

export type Category = {
  id: number;
  name: string;
};
