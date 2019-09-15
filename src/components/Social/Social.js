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
  font-family: ${({ theme }) => theme.font.family.ms};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`

const Social = ({ className }) => {
  return (
    <StyledIcons className={className}>
      <P>odwiedź mnie na:</P>
      <StyledLink target="_blank" href="http://www.facebook.com">
        <Icon src={fb} />
      </StyledLink>
      <StyledLink target="_blank" href="http://instagram.com">
        <Icon src={insta} />
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
