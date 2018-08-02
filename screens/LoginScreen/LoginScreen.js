import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  I18nManager,
  Image,
} from 'react-native'
import I18n from 'ex-react-native-i18n'
import { Util } from 'expo'
import { LinearGradient } from 'expo'
import Input from '../../Components/TextInput'
import Button from '../../Components/PrimeryButton'
import DATA from '../../Data/Data.json'
import styles from './LoginScreenStyles'

I18nManager.allowRTL(true)

export default class LoginScreen extends Component {
  state = {}
  state = {
    isRTL: I18nManager.isRTL,
    username: '',
    password: '',
    error: '',
    errors: '',
    errorMessage: '',
    loading: false
  }

  componentDidMount () {
    I18n.initAsync()
  }

  _onDirectionChange = () => {
    I18nManager.forceRTL(!this.state.isRTL)
    Util.reload()
    this.setState({ isRTL: !this.state.isRTL })
  }

  _signin = () => {
    const { username, password } = this.state;
    if (!this.state.username || !this.state.password) {
        return alert('enter your data')
      }
    const isExist = DATA.map(item => item.username === username ? true : false )
    if(isExist && username === 'Gamal' && password=== '111') {
      this.props.navigation.navigate('Home', {screen: 'haag'})
    } else  if(isExist && username === 'Ahmed' && password=== '222')  {
     alert('Motawef')
    }else{
      alert('username or password wrong')
    }
  
    // if (!this.state.username || !this.state.password) {
    //   return alert('enter your data')
    // }
    // if(this.state.username === 'Gamal' || this.state.username === 'Ahmed'){
    //   if(this.state.username === username === 'Gamal'){
    //     this.props.navigation.navigate('Home', {screen: 'haag'})
    //   }else{
    //     this.props.navigation.navigate('Home', {screen: 'dffd'})
    //   }

    // }
  }

  render () {
    return (
      <ScrollView
        horizontal={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <LinearGradient
          style={[styles.LinerGradientStyle]}
          start={{ x: 4.0, y: 1.0 }}
          colors={['#00b894', '#00b894', '#00b894']}
        >
          <Image
            source={require('../../Images/mecca.png')}
            style={styles.Image}
            resizeMode='contain'
          />
          <View style={styles.content}>

            <Input
              placeholder='User Name'
              containerStyle={styles.usernameStyle}
              onChangeText={username => this.setState({ username })}
              placeholderTextColor='white'
              style='white'
            />
            <Input
              placeholder='Password'
              containerStyle={styles.passwordStyle}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
              placeholderTextColor='white'
              style='white'
            />
            <Button
              title='Sign in'
              containerStyle={styles.signinStyle}
              titleStyle={styles.textButton}
              onPress={this._signin}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    )
  }
}
