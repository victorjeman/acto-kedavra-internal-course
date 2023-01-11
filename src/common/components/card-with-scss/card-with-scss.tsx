import './card-with-scss.scss'

interface Props {
  type: 'primary' | 'secondary' | 'help'
  size: 'small' | 'medium' | 'large'
  className?: string
  title: string
  children: React.ReactNode
}

export const CardWithScss = ({ type = 'primary', size = 'medium', title, className, children }: Props) => {
  return (
    <div className={`card card-${type} card-${size}`}>
      <h3 className={`card-title`}>{title}</h3>

      <div>{children}</div>
    </div>
  )
}
