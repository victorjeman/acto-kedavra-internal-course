import cx from 'classnames'

import styles from './card-with-css-modules-v2.module.scss'

interface Props {
  type: 'primary' | 'secondary' | 'help'
  size: 'small' | 'medium' | 'large'
  className?: string
  title: string
  children: React.ReactNode
}

export const CardWithCssModules = ({ type = 'primary', size = 'medium', title, className, children }: Props) => {
  return (
    <div className={cx(styles['card'], styles[`card-${type}`], styles[`card-${size}`], className)}>
      <h3 className={cx(styles['card-title'])}>{title}</h3>

      <div>{children}</div>
    </div>
  )
}
