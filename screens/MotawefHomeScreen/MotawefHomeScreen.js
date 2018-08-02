import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import I18n from 'ex-react-native-i18n'
import { Util } from 'expo'
import { Button } from 'react-native-paper'
import CodeScanner from '../../Components/CodeScanner'
import styles from './MotawefHomeScreenStyles'

const { container, button } = styles
class HomeScreen extends Component {
  state = {
    show: false
  }
  render () {
    return this.state.show
      ? <CodeScanner />
      : <View style={container}>
        <Image
          source={require('../../Images/qr-code.png')}
          style={styles.Image}
          resizeMode='contain'
          />
        <Button
          primary
          style={button}
          raised
          onPress={() => this.setState({ show: !this.state.show })}
          >
            Add
          </Button>
      </View>
  }
}

export default HomeScreen
