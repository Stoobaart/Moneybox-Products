import { useState } from 'react'
import { ProductAccordionItem } from '../../products/components/ProductAccordionItem'
import type { Category, Product } from '../../accounts-explorer/model/types'
import styles from './CategorySection.module.css'

type CategorySectionProps = {
  category: Category
  products: Product[]
  isExpanded: boolean
  onHeaderClick: () => void
}

export const CategorySection = ({
  category,
  products,
  isExpanded,
  onHeaderClick,
}: CategorySectionProps) => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  return (
    <section className={`${styles.section} ${isExpanded ? styles.expanded : ''}`}>
      <button
        type="button"
        className={styles.header}
        onClick={onHeaderClick}
        aria-expanded={isExpanded}
      >
        <h2 className={styles.title}>{category.title}</h2>
      </button>

      {isExpanded && (
        <div className={styles.content}>
          {products.map((product) => (
            <ProductAccordionItem
              key={product.id}
              product={product}
              isOpen={selectedProductId === product.id}
              onClick={() =>
                setSelectedProductId(selectedProductId === product.id ? null : product.id)
              }
            />
          ))}
        </div>
      )}
    </section>
  )
}
