import styles from './card-with-css-modules-v2.module.scss'

type CardType = 'primary' | 'secondary' | 'help'
type CardSize = 'small' | 'medium' | 'large'

interface Props {
  type: CardType
  size: CardSize
  title: string
  className?: string
  children: React.ReactNode
}

export const CardWithCssModules = ({ type = 'primary', size = 'medium', title, className, children }: Props) => {
  return (
    <div className={``}>
      <h3 className={``}>{title}</h3>

      <div>{children}</div>
    </div>
  )
}
