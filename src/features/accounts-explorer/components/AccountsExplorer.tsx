import { useState } from 'react'
import productData from '../../../data/products.json'
import { CategorySwitcher } from '../../categories/components/CategorySwitcher'
import { CategoryList } from '../../categories/components/CategoryList'

export const AccountsExplorer = () => {
  const { categories, products } = productData

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

  const handlePreviousCategory = () => {
    setSelectedCategoryIndex((previousIndex) => Math.max(previousIndex - 1, 0))
  }

  const handleNextCategory = () => {
    setSelectedCategoryIndex((previousIndex) => Math.min(previousIndex + 1, categories.length - 1))
  }

  return (
    <section>
      <CategorySwitcher
        hasPrevious={selectedCategoryIndex > 0}
        hasNext={selectedCategoryIndex < categories.length - 1}
        onPrevious={handlePreviousCategory}
        onNext={handleNextCategory}
      />

      <CategoryList
        categories={categories}
        products={products}
        selectedIndex={selectedCategoryIndex}
        onSelectIndex={setSelectedCategoryIndex}
      />
    </section>
  )
}
