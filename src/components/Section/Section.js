import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  top: 0;
  left: 0;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  min-height: 640px;
`

const Section = ({ id, width, height, children, className }) => {
  return (
    <StyledSection className={className} id={id} width={width} height={height}>
      {children}
    </StyledSection>
  )
}

Section.defaultProps = {
  width: '100vw',
  height: '100vh',
  className: '',
  id: null,
}

Section.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section
