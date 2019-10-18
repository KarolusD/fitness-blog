import React from 'react'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import BodyText from 'components/BodyText/BodyText'
import H1 from 'components/H1/H1'
import Section from 'components/Section/Section'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import { Link } from 'gatsby'

const StyledSection = styled(Section)`
  padding: 250px 10vw;
  padding-bottom: 0;
  text-align: center;
`

const StyledButton = styled(Button)`
  text-decoration: none;
  display: inline-block;
  padding: 8px 24px;
  margin-top: 40px;
`

const NotFoundPage = () => (
  <MainTemplate pageTitle="404">
    <StyledSection>
      <H1 content="404">404</H1>
      <BodyText>
        Właśnie trafiłeś na ścieżkę, która nie istnieje{' '}
        <span role="img" aria-label="zdziwienie">
          🤷‍♀️
        </span>
      </BodyText>
      <StyledButton as={Link} to="/">
        powrót do strony głównej
      </StyledButton>
    </StyledSection>
  </MainTemplate>
)

export default NotFoundPage
