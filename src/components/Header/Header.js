import React, { useState } from 'react'
import Logo from 'components/Logo/Logo'
import Hamburger from 'components/Hamburger/Hamburger'
import Menu from 'components/Menu/Menu'
import styled from 'styled-components'

const scrollToElement = require('scroll-to-element')

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.white};
  z-index: 1000;
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (e, target) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        e.preventDefault()
        scrollToElement(target, {
          offset: -80,
          ease: 'outCube',
          duration: 1000,
        })
      }
      setIsOpen(false)
    }
  }

  return (
    <FixedHeader>
      <Logo />
      <Hamburger isOpen={isOpen} onClick={toggleMobileMenu} />
      <Menu isOpen={isOpen} handleLinkClick={handleLinkClick} />
    </FixedHeader>
  )
}

export default Header
