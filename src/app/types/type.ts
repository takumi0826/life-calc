export type Content = {
  id: number;
  title: string;
  content: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
};
