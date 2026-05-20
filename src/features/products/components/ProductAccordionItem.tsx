import styles from './ProductAccordionItem.module.css'
import type { Product } from '../model/types'

type Props = {
  product: Product
  isOpen: boolean
  onClick: () => void
}

export const ProductAccordionItem = ({ product, isOpen, onClick }: Props) => {
  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={onClick} aria-expanded={isOpen}>
        <div className={styles.text}>
          <h3 className={styles.name}>{product.name}</h3>
        </div>
      </button>

      {isOpen && (
        <div className={styles.content}>
          <img src={`/assets/${product.image}`} alt={product.name} className={styles.image} />
          <p className={styles.description}>{product.description}</p>
        </div>
      )}
    </div>
  )
}
