import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/GlobalStyle'
import mainTheme from 'assets/styles/theme'
import Header from 'components/Header/Header'
import SEO from 'components/SEO/SEO'

const MainTemplate = ({ children, pageTitle }) => {
  return (
    <>
      <SEO title={pageTitle} />
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <>
          <Header />
          {children}
        </>
      </ThemeProvider>
    </>
  )
}

MainTemplate.defaultProps = {
  pageTitle: 'Strona KW',
}

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageTitle: PropTypes.string,
}

export default MainTemplate
