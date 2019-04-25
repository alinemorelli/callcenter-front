import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import classNames from 'classnames'
import './Card.scss'

const bem = bemClassName.bind(null, 'card')

export default function Card ({ className, title, children, action, actionIcon }) {
  return (
    <div className={classNames(bem(), className)}>
      <div className={bem('title')}>
        <h2 className={bem('title__text')}>{title}</h2>
        <img className={bem('title__image')} src={actionIcon} alt='' onClick={action} />
      </div>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}
