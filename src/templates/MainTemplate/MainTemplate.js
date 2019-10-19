import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/GlobalStyle'
import mainTheme from 'assets/styles/theme'
import Header from 'components/Header/Header'
import SEO from 'components/SEO/SEO'
import Footer from 'components/Footer/Footer'

const MainTemplate = ({
  children,
  pageTitle,
  description,
  url,
  type,
  image,
}) => {
  return (
    <>
      if(/Android/.test(navigator.appVersion)){' '}
      {window.addEventListener('resize', function() {
        if (
          document.activeElement.tagName == 'INPUT' ||
          document.activeElement.tagName == 'TEXTAREA'
        ) {
          document.activeElement.scrollIntoView()
        }
      })}
      <SEO
        title={pageTitle}
        description={description}
        url={url}
        type={type}
        image={image}
      />
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

MainTemplate.defaultProps = {
  pageTitle: 'Strona KW',
  url: '',
  type: '',
  image: '',
  description: '',
}

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
}

export default MainTemplate
