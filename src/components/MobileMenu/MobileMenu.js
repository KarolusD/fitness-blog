import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { Link } from 'react-scroll'
import { Location } from '@reach/router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 80px;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.white};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 300ms ease-out, background-color 300ms ease-out;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`

const NavList = styled.ul`
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
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
  }
`

const ItemLink = styled(Link)`
  ${linkStyles}
`

const ItemLinkSubpage = styled(GatsbyLink)`
  ${linkStyles}
`

const menuItems = ['home', 'o-mnie', 'oferta', 'blog', 'kontakt']

const IfMenuLinkIsSubpage = ({ location, isOpen, handleLinkClick }) => {
  if (location == '/') {
    let homePageItems = menuItems.map((item, index) => {
      if (item !== 'blog') {
        return (
          <CSSTransition
            key={item}
            in={isOpen}
            classNames="show"
            timeout={1000}
            unmountOnExit
          >
            <ListItem delay={`${300 + index * 80}ms`}>
              <ItemLink
                onClick={handleLinkClick}
                to={item}
                spy
                smooth
                hashSpy
                offset={-80}
                duration={500}
                delay={0}
                isDynamic
                activeClass="active"
              >
                {item.replace('-', ' ')}
              </ItemLink>
            </ListItem>
          </CSSTransition>
        )
      } else {
        return (
          <CSSTransition
            key={item}
            in={isOpen}
            classNames="show"
            timeout={1000}
            unmountOnExit
          >
            <ListItem delay={`${300 + index * 80}ms`}>
              <ItemLinkSubpage
                onClick={handleLinkClick}
                to={`/${item}`}
                activeClassName="active"
              >
                {item.replace('-', ' ')}
              </ItemLinkSubpage>
            </ListItem>
          </CSSTransition>
        )
      }
    })
    return homePageItems
  } else {
    let subpageItems = menuItems.map((item, index) => {
      return (
        <CSSTransition
          key={item}
          in={isOpen}
          classNames="show"
          timeout={1000}
          unmountOnExit
        >
          <ListItem delay={`${300 + index * 80}ms`}>
            <ItemLinkSubpage
              onClick={handleLinkClick}
              to={item == 'blog' ? `/${item}` : `/#${item}`}
              activeClassName="active"
            >
              {item}
            </ItemLinkSubpage>
          </ListItem>
        </CSSTransition>
      )
    })
    return subpageItems
  }
}

const MobileMenu = ({ isOpen, handleLinkClick }) => {
  return (
    <TransitionGroup component={null}>
      <>
        <Nav isOpen={isOpen}>
          <NavList>
            <Location>
              {({ location }) => (
                <IfMenuLinkIsSubpage
                  location={location.pathname}
                  isOpen={isOpen}
                  handleLinkClick={handleLinkClick}
                />
              )}
            </Location>
          </NavList>
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
