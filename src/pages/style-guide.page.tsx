import { useState } from 'react'
import { nanoid } from 'nanoid'

import { CardWithCss } from '@/common/components/card-with-css/card-with-css'
import { CardWithScss } from '@/common/components/card-with-scss/card-with-scss'
import { CardWithCssModules } from '@/common/components/card-with-css-modules/card-with-css-modules'
import { CardWithStyledComponents } from '@/common/components/card-with-styled-components/card-with-styled-components'

export const StyleGuidePage = () => {
  const [cardSize, setCardSize] = useState('')

  function changeCardTitle() {
    setCardSize(nanoid())
  }

  return (
    <div>
      <h1>Components</h1>

      <section>
        <h2>Card</h2>

        {/* <CardWithCss title='Card with simple css/scss' size='medium' type='primary' className='special-card u-mb-3'>
          Card content
        </CardWithCss> */}

        {/* <CardWithScss title='Card with simple css/scss' size='medium' type='primary' className='special-card u-mb-3'>
          Card content
        </CardWithScss> */}

        {/* <CardWithCssModules title='Card with css modules' size='medium' type='primary' className='special-card u-mb-3'>
          Card content
        </CardWithCssModules> */}

        {/* <CardWithStyledComponents title='Card with styled components' size='medium' type='help' className='u-mb-3'>
          Card content
        </CardWithStyledComponents> */}

        {/* <button onClick={changeCardTitle}>Change the title for the styled components card</button> */}
      </section>
    </div>
  )
}
