import React, { useState, useEffect } from 'react'
import Logo from 'components/Logo/Logo'
import Hamburger from 'components/Hamburger/Hamburger'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import Menu from 'components/Menu/Menu'
import styled from 'styled-components'
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
  border-radius: 0 0 0 64px;
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    border-radius: 0 0 0 64px;
  }
`

const StyledLogo = styled(Logo)`
  && {
    svg path {
      transition: all 200ms ease-in-out;
    }
    :hover {
      svg path {
        fill: ${({ theme }) => theme.blue};
      }
    }
  }
`
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.querySelector('body').classList.add('lock-scroll')
    } else {
      document.querySelector('body').classList.remove('lock-scroll')
    }
  }, [isOpen])

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (e, target) => {
    scrollTo(e, target)
    setIsOpen(false)
  }

  return (
    <>
      <FixedHeader>
        <StyledLogo />
        <Hamburger isOpen={isOpen} onClick={toggleMobileMenu} />
        <Menu handleLinkClick={handleLinkClick} />
      </FixedHeader>
      <MobileMenu isOpen={isOpen} handleLinkClick={handleLinkClick} />
    </>
  )
}

export default Header
