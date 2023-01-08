import styles from './card.module.scss'

export const Card = () => {
  return (
    <div className={styles['card']}>
      <h3 className={styles['card-title']}>Card title</h3>

      <div>Card content</div>
    </div>
  )
}
