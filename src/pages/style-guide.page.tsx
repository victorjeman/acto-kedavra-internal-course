import { Grid, Column } from '@/common/components/grid/grid'
import { Badge } from '@/common/components/badge/badge'
import { Badges } from '@/common/components/badges/badges'
import { Button } from '@/common/components/button/button'
import { Modal } from '@/common/components/modal/modal'
import { Notification } from '@/common/components/notification/notification'
import { Notifications } from '@/common/components/notifications/notifications'
import { ReadMore } from '@/common/components/read-more/read-more'
import { Card } from '@/common/components/card/card'

import { ActorHobbies } from '@/features/actors/components/actor-hobbies/actor-hobbies'
import { ActorMultipleDelete } from '@/features/actors/components/actor-multiple-delete/actor-multiple-delete'
import { ActorReadMore } from '@/features/actors/components/actor-read-more/actor-read-more'
import { ActorSort } from '@/features/actors/components/actor-sort/actor-sort'
import { ActorThumbnail } from '@/features/actors/components/actor-thumbnail/actor-thumbnail'

export const StyleGuidePage = () => {
  return (
    <div>
      <h1>Components</h1>

      <section>
        <h2>Card</h2>

        <Card title='Card title' size='medium' type='secondary' className='special-card u-mb-3'>
          A very nice card
        </Card>

        <Card title='Card title' size='medium' type='primary'>
          A very nice card
        </Card>
      </section>

      <section>
        <h2>Grid</h2>

        <Grid>
          <Column span={4}>1</Column>
          <Column span={4}>2</Column>
          <Column span={4}>3</Column>
        </Grid>
      </section>

      <section>
        <h2>Badges</h2>

        <Badge />
        <Badges />
      </section>

      <section>
        <h2>Buttons</h2>

        <Button />
      </section>

      <section>
        <h2>Modal</h2>

        <Modal />
      </section>

      <section>
        <h2>Notifications</h2>

        <Notification />
        <Notifications />
      </section>

      <section>
        <h2>Read hobbies</h2>

        <ReadMore />
      </section>

      <section>
        <h2>Actor hobbies</h2>

        <ActorHobbies />
      </section>

      <section>
        <h2>Actor multiple delete</h2>

        <ActorMultipleDelete />
      </section>

      <section>
        <h2>Actor read more</h2>

        <ActorReadMore />
      </section>

      <section>
        <h2>Actor sort</h2>

        <ActorSort />
      </section>

      <section>
        <h2>Actor sort</h2>

        <ActorThumbnail />
      </section>
    </div>
  )
}
