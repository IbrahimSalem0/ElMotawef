import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import PrimeryButton from './PrimeryButton'

storiesOf('PrimeryButton', module)
  .addDecorator(withKnobs)
  .add('Button with Text', () => {
    const title = text('title', 'Submit')
    const style = object('style', {})
    return (
      <PrimeryButton
        onPress={action('clicked-text')}
        title={title}
        containerStyle={style}
        
      />
    )
  })
