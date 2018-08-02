import React, { Component } from 'react'
import { Text, View, ScrollView, I18nManager, Image, ImageBackground } from 'react-native'
import I18n from 'ex-react-native-i18n'
import { Util } from 'expo'
import { LinearGradient } from 'expo'
import Input from '../../Components/TextInput'
// import Button from '../../Components/PrimeryButton'
import DATA from '../../Data/Data.json'
import { TextInput, Button } from 'react-native-paper'
import styles from './LoginScreenStyles'


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


  _signin = () => {
    const { username, password } = this.state
    if (!this.state.username || !this.state.password) {
      return alert('enter your data')
    }
    const isExist = DATA.map(item => item.username === username)
    if (isExist && username === 'Gamal' && password === '111') {
      this.props.navigation.navigate('Home', { screen: 'haag' })
    } else if (isExist && username === 'Ahmed' && password === '222') {
      this.props.navigation.navigate('MotawefHome', { screen: 'haag' })
    } else {
      alert('username or password wrong')
    }
  }

  render () {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={'../../Images/Bg.png'} >
      <ScrollView
        horizontal={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >

        <Image
          source={require('../../Images/logo.png')}
          style={styles.Image}
          resizeMode='contain'
        />

        <View style={styles.content}>

          <TextInput
            label='User Name'
            containerStyle={styles.usernameStyle}
            onChangeText={username => this.setState({ username })}
            // placeholderTextColor='white'
            style='white'
          />
          <TextInput
            label='Password'
            containerStyle={styles.passwordStyle}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          <Button
            raised
            primary
            onPress={this._signin}
            style={{ marginHorizontal: 0 , marginTop: 50}} 
          >
            Sign in
          </Button>
        </View>
      </ScrollView>
      </ImageBackground>
    )
  }
}
