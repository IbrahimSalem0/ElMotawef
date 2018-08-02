import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, ActivityIndicator, ViewPropTypes, View } from 'react-native'
import styles from './Style'
import { LinearGradient } from 'expo'
import * as Icons from '@expo/vector-icons'

export default class PrimeryButton extends React.Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
    colors: PropTypes.array,
    containerStyle: ViewPropTypes.style,
    disabled: PropTypes.bool,
    titleStyle: Text.propTypes.style,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    indicatorSize: 'small',
    colors: ['white', 'white'],
    indicatorColor: '#fff'
  }

  renderContent = () => {
    const IconType = Icons[this.props.iconType]
    return (
      <View style={styles.contentStyle}>
        {this.props.title
          ? <Text style={[styles.text, this.props.titleStyle]}>
            {this.props.title}
          </Text>
          : null}

        {this.props.iconType
          ? <IconType name={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor} />
          : null}
      </View>
    )
  }
  render () {
    return (
      <TouchableOpacity
        disabled={this.props.loading ? this.props.loading : this.props.disabled}
        style={[styles.container,styles.LinerGradientStyle, this.props.containerStyle]}
        {...this.props}
      >
        {/* <LinearGradient
          style={[
            styles.LinerGradientStyle,
            this.props.gradientStyle
          ]}
          start={{ x: 1.0, y: 1.0 }}
          colors={this.props.colors}
        > */}

          {this.props.loading
            ? <ActivityIndicator
              size={this.props.indicatorSize}
              color={this.props.indicatorColor}
            />
            : this.renderContent()

          }
        {/* </LinearGradient> */}
      </TouchableOpacity>
    )
  }
}
