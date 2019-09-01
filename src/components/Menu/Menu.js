import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'
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
`

const NavList = styled(Scrollspy)`
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

const ItemLink = styled(Link)`
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

const navListItems = ['home', 'o mnie', 'oferta', 'blog', 'kontakt']

const Menu = ({ isOpen, handleLinkClick }) => {
  return (
    <TransitionGroup component={null}>
      <Nav isOpen={isOpen}>
        <NavList items={navListItems} currentClassName="active" offset={-300}>
          {navListItems.map((item, index) => (
            <CSSTransition
              key={`${item}`}
              in={isOpen}
              classNames="show"
              timeout={1000}
              unmountOnExit
            >
              <ListItem delay={`${300 + index * 80}ms`}>
                <ItemLink
                  to={
                    item != 'blog'
                      ? `/#${item.replace(' ', '_')}`
                      : `/${item.replace(' ', '_')}`
                  }
                  onClick={
                    item != 'blog'
                      ? e => handleLinkClick(e, `#${item.replace(' ', '_')}`)
                      : null
                  }
                >
                  {item}
                </ItemLink>
              </ListItem>
            </CSSTransition>
          ))}
        </NavList>
      </Nav>
    </TransitionGroup>
  )
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
}

export default Menu
