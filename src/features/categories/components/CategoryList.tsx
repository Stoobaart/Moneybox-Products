import type { Category, Product } from '../../accounts-explorer/model/types'
import { CategorySection } from './CategorySection'
import styles from './CategoryList.module.css'

type CategoryListProps = {
  categories: Category[]
  products: Product[]
  selectedIndex: number
  onSelectIndex: (index: number) => void
}

export const CategoryList = ({
  categories,
  products,
  selectedIndex,
  onSelectIndex,
}: CategoryListProps) => {
  return (
    <div className={styles.grid}>
      {categories.map((category, index) => {
        const categoryProducts = products.filter((p) => p.categoryId === category.id)

        return (
          <CategorySection
            key={category.id}
            category={category}
            products={categoryProducts}
            isExpanded={index === selectedIndex}
            onHeaderClick={() => onSelectIndex(index)}
          />
        )
      })}
    </div>
  )
}
