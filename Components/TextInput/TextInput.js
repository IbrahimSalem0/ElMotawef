import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TextInput as RNTextInput,
  ViewPropTypes,
  Text
} from 'react-native'
import * as Icons from '@expo/vector-icons'

import styles from './Style'

export default class TextInput extends React.Component {
  static propTypes = {
    ...RNTextInput.propTypes,
    containerStyle: ViewPropTypes.style,
    iconStyle: Icons.Ionicons.propTypes.style,
    icon: PropTypes.string,
    error: PropTypes.bool,
    iconType: PropTypes.string
  }
  static defaultProps = {
    iconType: 'Ionicons'
  }

  onChangeText = e => {
    this.props.onChangeText(e)
    this.setState({
      error: false
    })
  }

  render () {
    const hasError = this.props.error
    const inputErrorStyle = hasError ? { color: 'red' } : {}
    const placeholderError = hasError ? { placeholderTextColor: 'red' } : {}
    const borderErrorStyle = hasError ? { borderBottomColor: 'red' } : {}
    const IconType = Icons[this.props.iconType]

    return (
      <View
        style={[styles.container, this.props.containerStyle, borderErrorStyle]}
      >
        {this.props.icon &&
          <IconType
            style={[styles.icon, styles.iconStyle]}
            name={this.props.icon}
            size={24}
          />}
        <RNTextInput
          underlineColorAndroid='transparent'
          {...this.props}
          {...placeholderError}
          style={[styles.input, this.props.style, inputErrorStyle]}
        />
      </View>
    )
  }
}
