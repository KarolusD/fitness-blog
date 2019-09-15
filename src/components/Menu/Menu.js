import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'

const navItemActive = keyframes`
  0% {
    transform: translate(164px, -252px) rotate(45deg);
  }

  100% {
    transform: translate(16px, -108px) rotate(45deg);
  }
`

const Nav = styled.nav`
  position: relative;
  display: none;
  top: 0;
  right: 0;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
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
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.huge} {
    justify-content: center;
  }
`

const ListItem = styled.li`
  position: relative;
  margin: 8%;
  cursor: pointer;

  &.active a {
    color: ${({ theme }) => theme.blue};
    transition: color 200ms 300ms ease-out;
  }

  &.active a::before {
    animation: ${navItemActive} 300ms 300ms ease-out both;
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 16px);
    height: 180px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.azure},
      rgba(152, 186, 255, 0)
    );
    opacity: 0.5;
    transform: translate(16px, -108px) rotate(45deg);
  }
`

const linkStyles = css`
  padding: 8px;
  text-decoration: none;
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.font.family.ms};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.black};
  white-space: nowrap;

  :hover {
    color: ${({ theme }) => theme.blue};
    transition: color 200ms ease-out;
  }
`

const ItemLink = styled(Link)`
  ${linkStyles}
  &.active {
    color: ${({ theme }) => theme.blue};
    transition: color 200ms 300ms ease-out;
    ::before {
      animation: ${navItemActive} 300ms 300ms ease-out both;
      z-index: -1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 16px);
      height: 180px;
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.azure},
        rgba(152, 186, 255, 0)
      );
      opacity: 0.5;
      transform: translate(16px, -108px) rotate(45deg);
    }
  }
`

const menuItems = ['home', 'o-mnie', 'oferta', 'blog', 'kontakt']

const Menu = ({ handleLinkClick }) => {
  return (
    <Nav>
      <NavList items={menuItems} currentClassName="active" offset={-300}>
        {menuItems.map(item => (
          <ListItem key={item}>
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
        ))}
      </NavList>
    </Nav>
  )
}

Menu.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
}

export default Menu
