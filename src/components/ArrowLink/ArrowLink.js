import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import scrollTo from 'utils/scrollTo'

const StyledLink = styled.button`
  box-shadow: none;
  border: none;
  outline: none;
  background: transparent;
  position: relative;
  display: ${({ arrowDisplay }) => (arrowDisplay ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  width: auto;
  height: auto;
  text-decoration: none;
  transform-origin: right;
  transform: rotate(${({ rotate }) => rotate});
  padding: 4px;
  overflow: hidden;
  cursor: pointer;

  .arrow-right {
    width: 64px;
    opacity: 1;
    transform: translateX(64px);
  }

  .arrow-right::before {
    opacity: 0;
  }

  .arrow-right::after {
    opacity: 0;
  }

  :hover {
    .arrow-left {
      opacity: 0;
      transform: translateX(-64px);
    }

    .arrow-right {
      width: 64px;
      opacity: 1;
      transform: translateX(-16px);
    }

    .text {
      transform: translateX(-80px);
    }

    .arrow-right::before,
    .arrow-right::after {
      opacity: 1;
    }
  }
`

const P = styled.p`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.button};
  width: auto;
  margin: 0 16px;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.51, 0.84, 0.32, 1.19);

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.button};
  }
`

const Arrow = styled.span`
  position: relative;
  height: 1px;
  width: 64px;
  background: ${({ color }) => color};
  transition: all 250ms ease-in-out;

  &.arrow-left {
    transform-origin: left;
    transition: all 250ms cubic-bezier(0.51, 0.84, 0.32, 1.19);
  }

  &.arrow-right {
    position: absolute;
    right: 0;
    transform-origin: right;
    transition: all 250ms cubic-bezier(0.51, 0.84, 0.32, 1.19);
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    right: 0;
    height: 1px;
    width: 8px;
    background: ${({ color }) => color};
    transform-origin: right;
  }

  ::before {
    transform: rotate(30deg);
  }

  ::after {
    transform: rotate(-30deg);
  }
`

const ArrowLink = ({
  text,
  rotate,
  location,
  className,
  color,
  arrowDisplay,
}) => (
  <StyledLink
    className={className}
    onClick={location ? e => scrollTo(e, `${location}`) : undefined}
    text={text}
    rotate={rotate}
    arrowDisplay={arrowDisplay}
  >
    <Arrow className="arrow-left" color={color} />
    <P className="text" color={color}>
      {text}
    </P>
    <Arrow className="arrow-right" color={color} />
  </StyledLink>
)

ArrowLink.defaultProps = {
  text: '',
  location: undefined,
  rotate: undefined,
  className: '',
  color: '#FFFFFF',
  arrowDisplay: true,
}

ArrowLink.propTypes = {
  text: PropTypes.string,
  rotate: PropTypes.string,
  location: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  arrowDisplay: PropTypes.bool,
}

export default ArrowLink
