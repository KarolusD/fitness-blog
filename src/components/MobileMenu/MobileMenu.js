import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Scrollspy from 'react-scrollspy'
import Social from 'components/Social/Social'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 300ms ease-out, background-color 300ms ease-out;
  overflow: none;
  z-index: -1;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`

const NavList = styled(Scrollspy)`
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  padding-top: 8%;
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const ListItem = styled.li`
  position: relative;
  margin: 8%;
  cursor: pointer;

  &.show-enter {
    opacity: 0;
    transform: translateY(-50px);
  }

  &.show-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: ${({ delay }) =>
      `transform 300ms ${delay} cubic-bezier(.48,1.15,.57,1.15), opacity 300ms ${delay} ease-out`};
  }

  &.show-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.show-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in;
  }

  &.active a {
    color: ${({ theme }) => theme.blue};
    transition: color 100ms 200ms ease-out;
  }
`

const linkStyles = css`
  padding: 8px;
  text-decoration: none;
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.font.family.ms};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.black};

  &.active {
    color: ${({ theme }) => theme.blue};
    transition: color 100ms 200ms ease-out;
  }
`

const ItemLink = styled(Link)`
  ${linkStyles}
  &.active {
    color: ${({ theme }) => theme.blue};
    transition: color 100ms 200ms ease-out;
  }
`

const StyledSocial = styled(Social)`
  && {
    ${({ theme }) => theme.mq.mobile} {
      display: flex;
      position: absolute;
      left: calc(50% - 125px);
      bottom: 32px;
      width: 250px;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      transition: transform 300ms 600ms ease-out, opacity 200ms 600ms ease-out;
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      transform: translateY(${({ isOpen }) => (isOpen ? 0 : '-100px')});
    }

    ${({ theme }) => theme.mq.desktop} {
      display: none;
    }
  }
`

const menuItems = ['home', 'o-mnie', 'oferta', 'blog', 'kontakt']

const MobileMenu = ({ isOpen, handleLinkClick }) => {
  return (
    <TransitionGroup component={null}>
      <>
        <Nav isOpen={isOpen}>
          <NavList items={menuItems} currentClassName="active" offset={-300}>
            {menuItems.map((item, index) => (
              <CSSTransition
                key={item}
                in={isOpen}
                classNames="show"
                timeout={1000}
                unmountOnExit
              >
                <ListItem delay={`${300 + index * 80}ms`}>
                  <ItemLink
                    to={item !== 'blog' ? `/#${item}` : `/${item}`}
                    onClick={
                      item !== 'blog'
                        ? e => handleLinkClick(e, `#${item}`)
                        : undefined
                    }
                    activeClassName="active"
                  >
                    {item.replace('-', ' ')}
                  </ItemLink>
                </ListItem>
              </CSSTransition>
            ))}
          </NavList>
          <StyledSocial isOpen={isOpen} />
        </Nav>
      </>
    </TransitionGroup>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
}

export default MobileMenu
