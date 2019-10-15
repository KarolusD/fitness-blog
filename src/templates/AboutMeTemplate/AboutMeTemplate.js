import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section/Section'
import Image from 'components/Image/Image'
import H1 from 'components/H1/H1'
import BodyText from 'components/BodyText/BodyText'
import Button from 'components/Button/Button'

const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 640px;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 0 10vw;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;
    align-items: center;
  }
`

const AboutMeDesc = styled.div`
  max-height: 50%;
  width: auto;
  margin-bottom: 40px;

  ${({ theme }) => theme.mq.tablet} {
    max-height: 100%;
    max-width: 100%;
    margin-bottom: 0;
  }
`

const P = styled(BodyText)`
  margin-bottom: 24px;
  max-width: 480px;
`

const AboutMeImage = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  max-width: 400px;

  :before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.bg};
    top: -16px;
    left: -16px;
    border-radius: 80px 0 0 0;
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 100%;
    width: 50%;
    margin-right: 32px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-right: 64px;
    :before {
      display: block;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    margin-right: 88px;
  }
`

const StyledImage = styled(Image)`
  border-radius: 2px;

  ${({ theme }) => theme.mq.tablet} {
    border-radius: 64px 0 0 0;
  }
`

const AboutMeTemplate = () => {
  return (
    <Section height="auto" id="o-mnie">
      <FlexWrapper>
        <AboutMeDesc>
          <H1 content="Poznaj mnie">Poznaj mnie</H1>
          <P>
            All of this text is editable. Simply click anywhere in the paragraph
            or heading text and start typing. You can copy and paste your own
            content in to see what it looks like with these font combinations.
          </P>
          <Button>moja przemiana</Button>
        </AboutMeDesc>
        <AboutMeImage>
          <StyledImage
            filename="about-me.png"
            alt="Dziewczyna wykonująca trening na siłowni"
          />
        </AboutMeImage>
      </FlexWrapper>
    </Section>
  )
}

export default AboutMeTemplate
