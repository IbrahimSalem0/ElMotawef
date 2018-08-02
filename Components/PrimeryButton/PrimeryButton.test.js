/* global expect it jest */
import React from 'react'
import { shallow } from 'enzyme'
import ClickButton from './ClickButton'

describe("ClickButton test cases", () => {
  it('renders without crashing', () => {
    shallow(<ClickButton />)
  })
  
  it('do something', () => {

    const renderedItem = shallow(<ClickButton />)
    // expect(renderedItem.find(ClickButton)).toHaveLength(2)
    
    // const onPress = jest.fn()
    // const item = renderedItem.find({ prop: 'value' }).first()
    // item.simulate('Press')
    // expect(onPress).toHaveBeenCalled()
  })

})
