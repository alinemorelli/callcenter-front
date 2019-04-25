import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './Dashboard'
import RefreshIcon from '../../images/refresh.png'

function setup() {
  const props = {
    getData: jest.fn(),
    activeCalls: []
  }

  const enzymeWrapper = shallow(<Dashboard {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Dashboard', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      const headerProps = enzymeWrapper.find('Header').props()
      expect(headerProps.title).toBe('Call Center')
      const cardProps = enzymeWrapper.find('Card').props()
      expect(cardProps.title).toBe('Active Calls')
      expect(cardProps.actionIcon).toBe(RefreshIcon)
    })
  })
})
