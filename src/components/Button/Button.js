import styled from 'styled-components'

const Button = styled.button`
  position: relative;
  display: block;
  height: 38px;
  padding: 0 24px;
  min-width: 128px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.pink};
  font-family: ${({ theme }) => theme.font.family.ms};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.mobile.button};
  text-transform: lowercase;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  appearance: none;
  transition: transform 200ms ease-in-out;

  :hover:before {
    transform: translate(12px, 12px);
  }

  :active {
    transform: translate(3px, 3px);
  }

  :active:before {
    transform: translate(6px, 6px);
  }

  ::before {
    transition: transform 200ms ease-in-out;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -6px;
    left: -6px;
    background-color: ${({ theme }) => theme.lightPink};
  }
`
export default Button
