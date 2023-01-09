import styles from './card.module.scss'
import classnames from 'classnames'

const cx = classnames.bind(styles)

interface Props {
  type: ''
  size: ''
  className?: ''
  title: ''
  children?: ''
}

export const Card = ({}: Props) => {
  return (
    <div className={cx(styles['card'])}>
      <h3 className={cx(styles['card-title'])}>card title</h3>

      <div>card content</div>
    </div>
  )
}
