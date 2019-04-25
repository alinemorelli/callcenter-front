import React from 'react'
import  { shallow } from 'enzyme'
import Header from './Header'

function setup() {
  const props = {
    title: 'Title'
  }

  const enzymeWrapper = shallow(<Header {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('.header__title').text()).toBe('Title')
    })
  })
})
