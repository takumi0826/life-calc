export type Content = {
  id: number;
  title: string;
  content: string;
  link: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
};
