import React from 'react'
import { shallow } from 'enzyme'
import TestComponent from './TestComponent'

describe('<TestComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<TestComponent />)

    expect(wrapper).toBeDefined()
  })
})
