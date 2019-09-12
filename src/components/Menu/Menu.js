import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { Link } from 'react-scroll'
import { Location } from '@reach/router'

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
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`

const ListItem = styled.li`
  position: relative;
  margin: 8%;
  cursor: pointer;

  &.active {
    a {
      color: ${({ theme }) => theme.blue};
      transition: color 600ms 200ms ease-out;
      ::before {
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
        animation: ${navItemActive} 800ms 200ms ease-out both;
      }
    }
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

const IfMenuLinkIsSubpage = ({ location }) => {
  if (location == '/') {
    let homePageItems = menuItems.map(item => {
      if (item !== 'blog') {
        return (
          <ListItem key={item}>
            <ItemLink
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
        )
      } else {
        return (
          <ListItem key={item}>
            <ItemLinkSubpage to={`/${item}`} activeClassName="active">
              {item.replace('-', ' ')}
            </ItemLinkSubpage>
          </ListItem>
        )
      }
    })
    return homePageItems
  } else {
    let subpageItems = menuItems.map(item => {
      return (
        <ListItem key={item}>
          <ItemLinkSubpage
            to={item == 'blog' ? `/${item}` : `/#${item}`}
            activeClassName="active"
          >
            {item}
          </ItemLinkSubpage>
        </ListItem>
      )
    })
    return subpageItems
  }
}

const Menu = () => {
  return (
    <Nav>
      <NavList>
        <Location>
          {({ location }) => (
            <IfMenuLinkIsSubpage location={location.pathname} />
          )}
        </Location>
      </NavList>
    </Nav>
  )
}

export default Menu
