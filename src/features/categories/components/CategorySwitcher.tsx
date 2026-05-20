import styles from './CategorySwitcher.module.css'

type CategorySwitcherProps = {
  hasPrevious: boolean
  hasNext: boolean
  onPrevious: () => void
  onNext: () => void
}

export const CategorySwitcher = ({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: CategorySwitcherProps) => {
  return (
    <div className={styles.switcher}>
      <button
        type="button"
        className={styles.button}
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous category"
      >
        ←
      </button>

      <p className={styles.title}>Explore Accounts</p>

      <button
        type="button"
        className={styles.button}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next category"
      >
        →
      </button>
    </div>
  )
}
