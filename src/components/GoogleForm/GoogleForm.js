import React from 'react'
import PropTypes from 'prop-types'

const GoogleForm = ({ title, src, width, height }) => {
  return (
    <iframe
      className="google-form"
      title={title}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Ładuję…
    </iframe>
  )
}

GoogleForm.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default GoogleForm
