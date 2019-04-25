import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/logo.png'
import bemClassName from 'bem-classname'
import classNames from 'classnames'
import './Header.scss'

const bem = bemClassName.bind(null, 'header')

export default function Header ({ className, title }) {
  return (
    <div className={classNames(bem(), className)}>
      <img className={bem('image')} src={logo} alt='Call center' />
      <h1 className={bem('title')} >{title}</h1>
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}
