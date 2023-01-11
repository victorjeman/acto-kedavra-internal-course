import styled, { css } from 'styled-components'

type CardType = 'primary' | 'secondary' | 'help'
type CardSize = 'small' | 'medium' | 'large'

interface Props {
  type: CardType
  size: CardSize
  className?: string
  title: string
  children: React.ReactNode
}

export const CardWithStyledComponents = ({ type = 'primary', size = 'medium', title, className, children }: Props) => {
  return (
    <StyledCard className={className} type={type} size={size}>
      <StyledTitle size={size}>{title}</StyledTitle>

      <div>{children}</div>
    </StyledCard>
  )
}

const StyledCard = styled.div<{
  type: CardType
  size: CardSize
}>`
  border: 5px solid #000;

  ${({ type, size }) =>
    css`
      padding: var(--padding-${size});
      border-radius: var(--border-${size});
      background-color: var(--color-${type});
    `};
`

const StyledTitle = styled.h3<{
  size: CardSize
}>`
  ${({ size }) =>
    css`
      font-size: var(--font-size-${size});
      line-height: var(--line-height-${size});
    `};
`
