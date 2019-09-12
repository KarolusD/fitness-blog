import React, { useState } from 'react'
import Logo from 'components/Logo/Logo'
import Hamburger from 'components/Hamburger/Hamburger'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import Menu from 'components/Menu/Menu'
import styled from 'styled-components'

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <FixedHeader>
      <Logo />
      <Hamburger isOpen={isOpen} onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isOpen} handleLinkClick={handleLinkClick} />
      <Menu />
    </FixedHeader>
  )
}

export default Header
