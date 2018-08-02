import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import styles from './DetailsScreenStyles'

class Details extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/photos/smiling-south-asian-bearded-male-picture-id464565934?k=6&m=464565934&s=612x612&w=0&h=tjPXYvtWdY4TzsZqhK4VZprNyE-lRfd_oQbdHSNO8k4='
            }}
            resizeMode='cover'
          />
        </View>
        <View style={styles.details}>
          <Text>Name: Ahmed</Text>
          <Text>Name: Ahmed</Text>
          <Text>Name: Ahmed</Text>
          <Text>Name: Ahmed</Text>
          <Text>Name: Ahmed</Text>
        </View>
      </View>
    )
  }
}

export default Details
