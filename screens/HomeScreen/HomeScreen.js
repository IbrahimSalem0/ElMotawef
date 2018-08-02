import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  I18nManager
} from 'react-native'
// import I18n from 'ex-react-native-i18n'
import { Util } from 'expo'
// === Local imports ===
import styles from './HomeScreenStyles'

// === Components ===

I18nManager.allowRTL(true)

class HomeScreen extends Component {
  state = {
    // isRTL: I18nManager.isRTL
  }
  _renderRow = data => {
    return (
      <TouchableOpacity
        style={styles.item}
        key={data.title}
        // onPress={() => this.props.navigation.navigate()}
      >
        <Image source={data.image} style={styles.image} />
        <Text style={styles.title}>
          {data.title}
        </Text>
      </TouchableOpacity>
    )
  }
  // componentDidMount () {
  //   I18n.initAsync()
  // }

  // _onDirectionChange = () => {
  //   I18nManager.forceRTL(!this.state.isRTL)
  //   Util.reload()
  //   this.setState({ isRTL: !this.state.isRTL })
  // }

  render () {
    const {
      homeContainer,
      homeHeaderText,
      homeFooterText,
      homeList,
      contentList
    } = styles
    return (
      <View style={homeContainer}>
        <View style={homeHeaderText}>
          <Text onPress={() => {}}>
            hi
          </Text>
        </View>
        <View style={homeList}>
          <FlatList
            renderItem={this._renderRow}
            data={[
              { title: 'some title here', image: '' },
              { title: 'lets make this one really long', image: '' }
            ]}
            contentContainerStyle={contentList}
            removeClippedSubviews={false}
            // numColumns={2}
          />
        </View>
        <View style={homeFooterText}>
          <Text onPress={() => {}}>
            hi
          </Text>
        </View>
      </View>
    )
  }
}

export default HomeScreen
