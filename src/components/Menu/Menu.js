import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'
import { pure } from 'recompose'

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
  left: 50px;
  margin: 8%;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(-50px)' : 'translateX(0)'};
  transition: ${({ delay }) =>
    `transform 300ms ${delay}ms cubic-bezier(.4,.94,.41,1.3), opacity 200ms ${delay}ms ease-out`};
  cursor: pointer;
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
    <Nav isOpen={isOpen}>
      <NavList items={navListItems} currentClassName="active" offset={-300}>
        {navListItems.map((item, index) => (
          <ListItem
            key={`${item}${index + Math.random()}`}
            isOpen={isOpen}
            delay={isOpen ? 300 + index * 80 : 100}
          >
            <ItemLink
              to={item != 'blog' ? `#${item}` : `/${item}`}
              onClick={
                item != 'blog'
                  ? e => handleLinkClick(e, `#${item}`)
                  : e => handleLinkClick(e, `${item}`)
              }
              activeClassName="active"
            >
              {item}
            </ItemLink>
          </ListItem>
        ))}
      </NavList>
    </Nav>
  )
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
}

export default pure(Menu)
