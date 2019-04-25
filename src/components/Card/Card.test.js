import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

function setup() {
  const props = {
    action: jest.fn(),
    title: 'Title'
  }

  const enzymeWrapper = shallow(<Card {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Card', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('.card__title__text').text()).toBe('Title')
    })

    it('should call action if actionButton is clicked', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('.card__title__image')
      expect(props.action.mock.calls.length).toBe(0)
      input.simulate('click')
      expect(props.action.mock.calls.length).toBe(1)
    })
  })
})
