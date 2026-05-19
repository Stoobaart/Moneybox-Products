import data from '../../../data/products.json'

export const useProducts = () => {
  const productData = data

  return {
    categories: productData.categories,
    products: productData.products,
  }
}