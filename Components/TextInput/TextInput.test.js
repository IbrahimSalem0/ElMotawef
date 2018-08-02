/* global expect it jest */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import { init as initTheme } from '@shopz/ThemeProvider'
import DefaultTheme from '../../Config/Theme'

initTheme(DefaultTheme)

describe("TextInput test cases", () => {
  const TextInput = require('./TextInput').default
  it('renders without crashing', () => {
    shallow(<TextInput />)
  })
  
  // it('do something', () => {

  //   const renderedItem = shallow(<TextInput />)
  //   // expect(renderedItem.find(TextInput)).toHaveLength(2)
    
  //   // const onPress = jest.fn()
  //   // const item = renderedItem.find({ prop: 'value' }).first()
  //   // item.simulate('Press')
  //   // expect(onPress).toHaveBeenCalled()
  // })

})
