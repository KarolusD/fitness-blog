import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const OuterHamburger = styled.button`
  border: none;
  background: none;
  outline: none;
  box-shadow: none;
  padding: 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`
const InnerHamburger = styled.div`
  position: relative;
  right: 0;
  width: ${({ isOpen }) => (isOpen ? '0' : '24px')};
  height: 3px;
  border-radius: 3px;
  background: ${({ theme }) => theme.rose};
  transition: width 200ms cubic-bezier(0.51, 0.84, 0.32, 1.19);
  ::before,
  ::after {
    content: '';
    position: absolute;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.rose};
    border-radius: 3px;
    transition: transform 300ms cubic-bezier(0.51, 0.84, 0.32, 1.19),
      width 300ms cubic-bezier(0.51, 0.84, 0.32, 1.19);
  }
  ::before {
    top: -8px;
    transform: ${({ isOpen }) =>
      isOpen ? ' translateY(8px) rotate(-45deg) ' : ''};
    width: ${({ isOpen }) => (isOpen ? '24px' : '16px')};
  }
  ::after {
    width: ${({ isOpen }) => (isOpen ? '24px' : '12px')};
    top: 8px;
    transform: ${({ isOpen }) =>
      isOpen ? ' translateY(-8px) rotate(45deg)' : ''};
  }
`

const Hamburger = ({ isOpen, ...props }) => (
  <OuterHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </OuterHamburger>
)

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Hamburger
