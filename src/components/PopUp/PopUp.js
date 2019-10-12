import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import BodyText from 'components/BodyText/BodyText'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`

const bounce = keyframes`
  0% {
    transform: scale(0.3)
  }
  70% {
    transform: scale(1.03)
  }
  100% {
    transform: scale(1)
  }
`
const PopUpWrapper = styled.div`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  z-index: 999999999;
  overflow: auto;
  overflow-x: hidden;

  iframe {
    padding-top: 108px;
    margin-bottom: 80px;
    width: 100vw;
    animation: ${bounce} 600ms cubic-bezier(0.51, 0.84, 0.32, 1.19),
      ${fadeIn} 400ms ease-in-out;
    transform-origin: top;
    overflow: hidden;

    ::-webkit-scrollbar {
      display: none;
    }

    html::-webkit-scrollbar {
      display: none;
    }
  }

  :before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.9);
    animation: ${fadeIn} 600ms ease-in-out;
  }
`
const CloseForm = styled.button`
  border: none;
  outline: none;
  appearance: none;
  box-shadow: none;
  position: absolute;
  top: 5vh;
  right: 5vw;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.lightPink};
  border-radius: 2px;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  animation: ${fadeIn} 800ms ease-in-out;

  p {
    position: absolute;
    top: 8px;
    left: -140px;
    color: ${({ theme }) => theme.pink};
    white-space: nowrap;
  }

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background: ${({ theme }) => theme.pink};
    top: calc(50% - 2px);
    border-radius: 2px;
    left: 8px;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`

const PopUp = ({ children, isOpen, closePopUp, id }) => {
  return (
    <PopUpWrapper id={id} isOpen={isOpen ? 1 : 0}>
      <CloseForm type="button" onClick={closePopUp}>
        <BodyText>zamknij formularz</BodyText>
      </CloseForm>
      {children}
    </PopUpWrapper>
  )
}

PopUp.defaultProps = {
  isOpen: false,
}

PopUp.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  closePopUp: PropTypes.func.isRequired,
}

export default PopUp
