import './card-with-css.css'

type CardType = 'primary' | 'secondary' | 'help'
type CardSize = 'small' | 'medium' | 'large'

interface Props {
  type: CardType
  size: CardSize
  title: string
  className?: string
  children: React.ReactNode
}

export const CardWithCss = ({ type = 'primary', size = 'medium', title, className, children }: Props) => {
  return (
    <div className={``}>
      <h3 className={``}>{title}</h3>

      <div>{children}</div>
    </div>
  )
}
