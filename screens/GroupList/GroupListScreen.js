import React, { Component } from 'react'
import {
  View,
  I18nManager,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import I18n from 'ex-react-native-i18n'
import { Util } from 'expo'
import { BarCodeScanner, Permissions } from 'expo'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph,
  TouchableRipple,
  Text
} from 'react-native-paper'
import styles from './GroupListScreenStyles'

I18nManager.allowRTL(true)

class GroupListScreen extends Component {
  _renderItem = () => {
    return (
      // <View style={styles.item} >
      // <Image style={} source={{uri: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjHsKefmM_cAhVHbBoKHf6WCWgQjRx6BAgBEAU&url=http%3A%2F%2Fwww.kooora.com%2F%3Fplayer%3D11803&psig=AOvVaw2Ycjdj74o9wv_5U6ulq7R5&ust=1533327512560491'}} />

      // </View>
      (
        <TouchableOpacity style={styles.item} >
          <Card>
            <View style={styles.container}>
              <Image
                style={styles.imagecontainer}
                source={{
                  uri: 'http://img.kooora.com/?i=ali.18%2f2017%2f6%2f22%2f19403326_1563764110352554_711117660_o.jpg'
                }}
              />
             <View style={styles.nameContainer} >

               <View style={{flexDirection: 'row', }} >
                <Text>
                  Name : {` `}
                </Text>
                <Text>
                  Gamal Ahmed
                </Text>
               </View>

               <View style={styles.cardStyle} >
                <Text>
                  Age : {` `}
                </Text>
                <Text>
                  33
                </Text>
               </View>

               <View style={styles.cardStyle} >
                <Text>
                  ID : {` `}
                </Text>
                <Text>
                  43748
                </Text>
               </View>

               <View style={styles.cardStyle} >
                <Text>
                country : {` `}
                </Text>
                <Text>
                  Egypt
                </Text>
               </View>

             </View>
            </View>
          </Card>
        </TouchableOpacity>
      )
    )
  }
  render () {
    return (
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={this._renderItem}
      />
    )
  }
}

export default GroupListScreen
