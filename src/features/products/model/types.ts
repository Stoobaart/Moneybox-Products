export type Product = {
  id: string;
  name: string;
  description: string;
  asset: string;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
}

export type ProductData = {
  categories: Category[];
  products: Product[];
}