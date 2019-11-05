import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRM = styled.div`
  animation: fadeInBottom 800ms 400ms cubic-bezier(0.51, 0.84, 0.32, 1.19) both;

  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.font.family.rhd};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.black};
    margin: 0;
    margin-top: 48px;
    line-height: normal;
  }

  & > h1 {
    line-height: 56px;
    font-size: ${({ theme }) => theme.font.size.mobile.h1};
    font-weight: ${({ theme }) => theme.font.weight.black};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.h1};
    }
  }

  & > h2 {
    line-height: 44px;
    font-size: ${({ theme }) => theme.font.size.mobile.h2};
    font-weight: ${({ theme }) => theme.font.weight.black};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.h2};
    }
  }

  & > h3 {
    font-size: ${({ theme }) => theme.font.size.mobile.h3};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.h3};
    }
  }

  & > h4 {
    font-size: ${({ theme }) => theme.font.size.mobile.h4};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.h4};
    }
  }

  & > h5 {
    font-size: ${({ theme }) => theme.font.size.mobile.h5};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.h5};
    }
  }

  & > h6 {
    font-size: ${({ theme }) => theme.font.size.mobile.h6};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.h6};
    }
  }

  & > p {
    font-family: ${({ theme }) => theme.font.family.rht};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.black};
    line-height: 3.2rem;
    margin: 16px 0;
  }

  & > ul,
  ol {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    padding: 0;
    padding-left: 24px;
    li {
      position: relative;
      font-family: ${({ theme }) => theme.font.family.rhd};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.desktop.body};
      color: ${({ theme }) => theme.black};
      line-height: 24px;
      letter-spacing: 0.02rem;
      margin: 4px 0;

      ::before {
        content: '';
        position: absolute;
        top: 8px;
        left: -20px;
        width: 8px;
        height: 8px;
        border-radius: 8px 0 0 0;
        background: ${({ theme, leftImage }) =>
          leftImage ? theme.rose : theme.azure};
      }
    }
  }

  button {
    position: relative;
    display: block;
    height: 38px;
    padding: 0 24px;
    min-width: 128px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.pink};
    font-family: ${({ theme }) => theme.font.family.rhd};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.mobile.button};
    text-transform: lowercase;
    letter-spacing: 0.05rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;
    appearance: none;
    transition: transform 200ms ease-in-out;
    margin: 24px 0;

    :before {
      transition: transform 200ms ease-in-out;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: -6px;
      left: -6px;
      background-color: ${({ theme }) => theme.lightPink};
    }

    :focus:before,
    :hover:before {
      transform: translate(12px, 12px);
    }

    :active {
      transform: translate(3px, 3px);
    }

    :active:before {
      transform: translate(6px, 6px);
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.desktop.button};
    }
  }

  a {
    font-family: ${({ theme }) => theme.font.family.rhd};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.mobile.body};
    color: ${({ theme }) => theme.blue};
    line-height: 24px;
    letter-spacing: 0.02rem;
    margin: 24px 0;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 2px;
    margin: 16px 0;
  }

  iframe {
    width: 680px;
    height: auto;
    min-height: 400px;
  }
`

const StyledReactMarkdown = ({ children }) => {
  return <StyledRM>{children}</StyledRM>
}

StyledReactMarkdown.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StyledReactMarkdown
