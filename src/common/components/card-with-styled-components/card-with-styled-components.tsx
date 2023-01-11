import styled from 'styled-components'

type CardType = 'primary' | 'secondary' | 'help'
type CardSize = 'small' | 'medium' | 'large'

interface Props {
  type: CardType
  size: CardSize
  title: string
  className?: string
  children: React.ReactNode
}

export const CardWithStyledComponents = ({ type = 'primary', size = 'medium', title, className, children }: Props) => {
  return (
    <div className={className}>
      <h3>{title}</h3>

      <div>{children}</div>
    </div>
  )
}
