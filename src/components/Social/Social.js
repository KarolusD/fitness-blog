import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon/Icon'
import fb from 'assets/images/fb-logo.svg'
import insta from 'assets/images/instagram-logo.svg'

const StyledIcons = styled.div`
  display: none;
  width: 0;

  ${({ theme }) => theme.mq.huge} {
    position: relative;
    display: flex;
    width: 20%;
    max-width: 250px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const P = styled.p`
  font-family: ${({ theme }) => theme.font.family.rht};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  white-space: nowrap;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`

const StyledIcon = styled(Icon)`
  svg path {
    transition: fill 200ms ease-in-out;
  }
  :hover {
    svg path {
      fill: ${({ theme }) => theme.blue};
    }
  }
`

const Social = ({ className }) => {
  return (
    <StyledIcons className={className}>
      <P>odwiedź mnie na:</P>
      <StyledLink
        target="_blank"
        href="https://www.facebook.com/Klaudia-Woli%C5%84ska-dieta-i-trening-112257933522277/"
      >
        <StyledIcon src={fb} />
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://www.instagram.com/wolinskaa/?hl=pl"
      >
        <StyledIcon src={insta} />
      </StyledLink>
    </StyledIcons>
  )
}

Social.defaultProps = {
  className: '',
}

Social.propTypes = {
  className: PropTypes.string,
}

export default Social
