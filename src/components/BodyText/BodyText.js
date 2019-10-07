import styled from 'styled-components'

const BodyText = styled.p`
  font-family: ${({ theme }) => theme.font.family.rht};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  color: ${({ theme }) => theme.black};
  line-height: 24px;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }
`

export default BodyText
