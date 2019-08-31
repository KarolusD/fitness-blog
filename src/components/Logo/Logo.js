import React from 'react'
import { Link } from 'gatsby'
import Icon from 'components/Icon/Icon'
import logo from 'assets/images/logo.svg'

const Logo = () => {
  return (
    <Link to="/">
      <Icon src={logo} />
    </Link>
  )
}

export default Logo
