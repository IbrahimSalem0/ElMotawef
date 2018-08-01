import React, { Component } from 'react'
import { Text, View, ScrollView, I18nManager } from 'react-native'
import I18n from 'ex-react-native-i18n'
import { Util } from 'expo'
// === Local imports ===
// import styles from './HomeScreenStyles'

// === Components ===

I18nManager.allowRTL(true)

class HomeScreen extends Component {
  state = {
    isRTL: I18nManager.isRTL
  }

  componentDidMount () {
    I18n.initAsync()
  }

  _onDirectionChange = () => {
    I18nManager.forceRTL(!this.state.isRTL)
    Util.reload()
    this.setState({ isRTL: !this.state.isRTL })
  }

  render () {
    return (
      <ScrollView horizontal={false}>
        <View>
          <Text onPress={this._onDirectionChange}>
            {I18n.t('hi')}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default HomeScreen
