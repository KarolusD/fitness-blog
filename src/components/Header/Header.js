import React, { useState } from 'react'
import Logo from 'components/Logo/Logo'
import Hamburger from 'components/Hamburger/Hamburger'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import Menu from 'components/Menu/Menu'
import styled from 'styled-components'
import Social from 'components/Social/Social'
import scrollTo from 'utils/scrollTo'

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
  background-color: ${({ theme }) => theme.bg};
  z-index: 1000;
  border-radius: 0 0 0 88px;

  ${({ theme }) => theme.mq.tablet} {
    border-radius: 0 0 0 164px;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    document.querySelector('body').classList.add('lock-scroll')
  } else {
    document.querySelector('body').classList.remove('lock-scroll')
  }

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (e, target) => {
    scrollTo(e, target)
    setIsOpen(false)
  }

  return (
    <FixedHeader>
      <Logo />
      <Hamburger isOpen={isOpen} onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isOpen} handleLinkClick={handleLinkClick} />
      <Menu handleLinkClick={handleLinkClick} />
      <Social />
    </FixedHeader>
  )
}

export default Header
