import React from 'react'
import styled from 'styled-components'
import Image from 'components/Image/Image'
import Section from 'components/Section/Section'
import extraShape01 from 'assets/images/hero-extra-shape-01.svg'
import extraShape02 from 'assets/images/hero-extra-shape-02.svg'
import Button from 'components/Button/Button'
import scrollTo from 'utils/scrollTo'
import Social from 'components/Social/Social'

const HeroSection = styled(Section)`
  background: ${({ theme }) => theme.bg};
  min-height: 600px;
  max-height: 900px;
  border-radius: 0 0 0 88px;
`

const FlexWrapper = styled.div`
  position: relative;
  height: 100%;
  bottom: 0;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-start;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    align-items: flex-end;
  }
`

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.pd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.h1};
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 12px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.h1};
  }
`

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.ms};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  letter-spacing: 0.3rem;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 20px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }
`

const P = styled.p`
  display: none;
  font-family: ${({ theme }) => theme.font.family.ms};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  color: ${({ theme }) => theme.black};
  line-height: 24px;
  max-width: 400px;
  margin: 0;
  margin-bottom: 32px;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 480px;
  }
`

const HeroCTA = styled(Button)`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`

const HeroDescFlexItem = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  align-items: flex-start;

  ${({ theme }) => theme.mq.tablet} {
    height: 100%;
    width: 50%;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 10vw;
  }
`
const HeroImageFlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-height: 65%;

  img {
    object-position: bottom left !important;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    max-height: 80%;
  }
`

const HeroImageShape = styled.div`
  position: absolute;
  bottom: 0;
  right: -10vw;
  height: 85%;
  width: 50vw;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 88px 0 0 0;
  clip-path: inset(0 round 88px 0 0 0);

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: url(${extraShape01});
    background-repeat: no-repeat;
    background-position: bottom right;
    opacity: 0.4;
  }

  ::before {
    content: '';
    position: absolute;
    bottom: 0%;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: url(${extraShape02});
    background-repeat: no-repeat;
    background-position: bottom right;
    opacity: 0.4;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 42vw;
  }
`

const StyledSocial = styled(Social)`
  && {
    ${({ theme }) => theme.mq.desktop} {
      position: absolute;
      left: 20vw;
      bottom: 5vh;
      display: flex;
      align-items: center;
      align-content: flex-start;
      justify-content: space-between;
      width: 220px;
    }

    ${({ theme }) => theme.mq.huge} {
      display: none;
    }
  }
`

const HeroTemplate = () => {
  return (
    <HeroSection id="home" width="100vw" height="100vh">
      <FlexWrapper>
        <HeroDescFlexItem>
          <H1>Trener personalny</H1>
          <H2>Klaudia Wolińska</H2>
          <P>
            All of this text is editable. Simply click anywhere in the paragraph
            or heading text and start typing. You can copy and paste your own
            content in to see what it looks like with these font combinations.
          </P>
          <HeroCTA onClick={e => scrollTo(e, '#o-mnie')}>poznaj mnie</HeroCTA>
        </HeroDescFlexItem>
        <HeroImageFlexItem>
          <HeroImageShape />
          <Image
            alt="Trener personalny – Klaudia Wolińska"
            filename="hero-img.png"
          />
        </HeroImageFlexItem>
      </FlexWrapper>
      <StyledSocial />
    </HeroSection>
  )
}

export default HeroTemplate
