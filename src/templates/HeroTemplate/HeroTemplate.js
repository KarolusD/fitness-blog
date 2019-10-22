import React from 'react'
import styled from 'styled-components'
import Image from 'components/Image/Image'
import Section from 'components/Section/Section'
import extraShape01 from 'assets/images/hero-extra-shape-01.svg'
import extraShape02 from 'assets/images/hero-extra-shape-02.svg'
import Button from 'components/Button/Button'
import scrollTo from 'utils/scrollTo'
import Social from 'components/Social/Social'
import H1 from 'components/H1/H1'
import BodyText from 'components/BodyText/BodyText'
import ArrowLink from 'components/ArrowLink/ArrowLink'
import ScrollAnimation from 'react-animate-on-scroll'

const HeroSection = styled(Section)`
  background: ${({ theme }) => theme.bg};
  min-height: 600px;
  max-height: 900px;
  border-radius: 0 0 0 64px;
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

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
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

const P = styled(BodyText)`
  display: none;
  line-height: 24px;
  max-width: 400px;
  margin: 0;
  margin-bottom: 32px;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 450px;
  }
`

const HeroCTA = styled(Button)`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`

const HeroDesc = styled.div`
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
const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-height: 65%;

  img {
    animation: fadeInBottom 600ms 400ms ease-out both;
    object-position: bottom left !important;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    max-height: 80%;
  }
  ${({ theme }) => theme.mq.huge} {
    img {
      left: -50px !important;
    }
  }
`

const HeroImageShape = styled.div`
  position: absolute;
  bottom: 0;
  right: -10vw;
  height: 85%;
  width: 50vw;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 64px 0 0 0;
  clip-path: inset(0 round 64px 0 0 0);
  animation: scaleUp 600ms 200ms cubic-bezier(0.51, 0.84, 0.32, 1.19) both;

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
  }
`

const StyledArrow = styled(ArrowLink)`
  &&& {
    display: none;
    position: absolute;
    right: 8vw;
    bottom: 2vh;

    ${({ theme }) => theme.mq.desktop} {
      display: flex;
    }

    ${({ theme }) => theme.mq.huge} {
      right: 3vw;
    }
  }
`

const HeroTemplate = () => {
  return (
    <HeroSection id="home" width="100vw" height="100vh">
      <FlexWrapper>
        <HeroDesc>
          <ScrollAnimation animateIn="fadeInBottom" delay={200} animateOnce>
            <H1 content="Trener personalny">Trener personalny</H1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInBottom" delay={400} animateOnce>
            <H2>Klaudia Wolińska</H2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInBottom" delay={600} animateOnce>
            <P>
              Każdy kiedyś zaczynał. Najważniejszy jest ten pierwszy krok! Jeśli
              chcesz poprawić swoją jakość życia, osiagnąć wymarzoną sylwetkę i
              czuć się zdrowo w swoim ciele, dobrze trafiłeś. Mogę Ci pomóc w
              łatwy sposób z Twoim rozwojem, dietą i treningiem.
            </P>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInBottom" delay={800} animateOnce>
            <HeroCTA type="button" onClick={e => scrollTo(e, '#o-mnie')}>
              poznaj mnie
            </HeroCTA>
          </ScrollAnimation>
        </HeroDesc>
        <HeroImage>
          <HeroImageShape />
          <Image
            alt="Trener personalny – Klaudia Wolińska"
            filename="hero-img.png"
          />
        </HeroImage>
      </FlexWrapper>
      <ScrollAnimation
        animateIn="fadeInBottom"
        delay={700}
        offset={1000}
        animateOnce
      >
        <StyledSocial />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInBottom"
        delay={700}
        offset={1000}
        animateOnce
      >
        <StyledArrow
          to="/#o-mnie"
          text="scrolluj w dół"
          location="#o-mnie"
          rotate="90deg"
        />
      </ScrollAnimation>
    </HeroSection>
  )
}

export default HeroTemplate
