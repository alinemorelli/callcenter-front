import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import classNames from 'classnames'
import Header from '../../components/Header'
import Card from '../../components/Card'
import CallImage from '../../images/call.png'
import RefreshIcon from '../../images/refresh.png'

import './Dashboard.scss'

const bem = bemClassName.bind(null, 'dashboard')

const callStatusMap = {
  'call.new': 'New',
  'call.standby': 'Standby',
  'call.waiting': 'Waiting',
  'actor.entered': 'Pick up',
  'call.ongoing': 'On going',
  'actor.left': 'Left',
  'call.finished': 'Finished'
}

class Dashboard extends Component {
  componentDidMount() {
    this.props.getData()
  }

  renderCallList() {
    const { activeCalls } = this.props
    return (
      <ul className={bem('list')}>
        {activeCalls.map((call, index) => {
          return (
            <li className={bem('list__item')} key={index}>
              <img className={bem('list__image')} src={CallImage} alt='Call' />
              <h3 className={bem('list__number')}>{call.their_number}</h3>
              <p className={bem('list__status')}>{callStatusMap[call.type]}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  renderNoCallsMessage() {
    return(
      <p className={bem('calls__message')}>There are no active calls!</p>
    )
  }

  render() {
    const { activeCalls, className, getData } = this.props
    return (
      <div className={classNames(bem(), className)}>
        <Header title='Call Center'/>
        <div className={bem('container')}>
          <Card title='Active Calls' action={getData} actionIcon={RefreshIcon}>
            {activeCalls.length > 0 ? this.renderCallList() : this.renderNoCallsMessage()}
          </Card>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  className: PropTypes.string,
  activeCalls: PropTypes.array
}

export default Dashboard
