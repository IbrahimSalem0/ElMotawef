import React, { Component } from 'react'
import { Image, View } from 'react-native'

import styles from './DetailsScreenStyles'

class Details extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://image.flaticon.com/icons/svg/145/145842.svg' }}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
    )
  }
}

export default Details
