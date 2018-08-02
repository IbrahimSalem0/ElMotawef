import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import { BarCodeScanner, Permissions } from 'expo'
import styles from './HomeScreenStyles'

class HomeScreen extends Component {
  state = {
    hasCameraPermission: null,
    show: false
  }

  async componentWillMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render () {
    const { hasCameraPermission } = this.state

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {this.state.show === false
            ? <View style={styles.container}>
              <Image
                source={require('../../Images/qr-code.png')}
                  // style={styles.Image}
                resizeMode='contain'
                />
              <Button
                primary
                style={styles.button}
                raised
                onPress={() => this.setState({ show: true })}
                style={{alignSelf: 'stretch', marginTop: 30}}
                >
                  Scan
                </Button>

            </View>
            : <View style={StyleSheet.absoluteFill}>

              <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={{ flex: 1, alignSelf: 'stretch' }}
                />
              <Button
                style={{
                  position: 'absolute',
                  right: 20,
                  left: 20,
                  bottom: 40,
                  backgroundColor: 'red'
                }}
                color = 'white'
                onPress={() => this.setState({ show: false })}
                >
                cancel
                </Button>

              {/* <Text
                style={{ fontSize: 25 }}
                onPress={() => this.setState({ show: false })}
                >
                  Back
                </Text> */}

            </View>}
        </View>
      )
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    Alert.alert(
      'Alert ',
      `Bar code with type ${type} and data ${data} has been scanned!`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.setState({ show: false }) }
      ],
      { cancelable: false }
    )
  }
}

export default HomeScreen
