import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledH1 = styled.h1`
  display: inline-block;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.mobile.h1};
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 12px;
  /* text-shadow: -6px 0px 0 blue; */

  ::before {
    content: ${({ content }) => `'${content}'`};
    position: absolute;
    width: auto;
    height: 100%;
    right: 0;
    bottom: 50%;
    font-family: ${({ theme }) => theme.font.family.rhd};
    font-weight: ${({ theme }) => theme.font.weight.black};
    font-size: ${({ theme }) => theme.font.size.mobile.huge};
    color: ${({ theme }) => theme.lightBlue};
    white-space: nowrap;
    text-align: right;
  }

  ${({ theme }) => theme.mq.small} {
    font-size: 8vw;

    ::before {
      font-size: 14vw;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.h1};

    ::before {
      font-size: ${({ theme }) => theme.font.size.desktop.huge};
      bottom: 80%;
    }
  }
`

const H1 = ({ content, children, className }) => (
  <StyledH1 className={className} content={content}>
    {children}
  </StyledH1>
)

H1.defaultProps = {
  content: '',
  className: '',
}

H1.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default H1
