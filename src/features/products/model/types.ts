export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
};

export type Category = {
  id: string;
  title: string;
}

export type ProductData = {
  categories: Category[];
  products: Product[];
}