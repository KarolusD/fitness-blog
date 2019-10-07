import React from 'react'
import { Link } from 'gatsby'
import Icon from 'components/Icon/Icon'
import logo from 'assets/images/logo.svg'
import PropTypes from 'prop-types'

const Logo = ({ className }) => {
  return (
    <Link className={className} to="/">
      <Icon src={logo} />
    </Link>
  )
}

Logo.defaultProps = {
  className: '',
}

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
