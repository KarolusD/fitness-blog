import React from 'react'
import styled from 'styled-components'
import Social from 'components/Social/Social'

const StyledFooter = styled.footer`
  padding: 24px 10vw;
  display: flex;
  position: relative;
  height: auto;
  min-height: 100px;
  width: 100vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`

const StyledSocial = styled(Social)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copy rights &#169;. All rights reserved. </p>
      <StyledSocial />
    </StyledFooter>
  )
}

export default Footer
