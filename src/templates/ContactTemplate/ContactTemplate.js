import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section/Section'
import Image from 'components/Image/Image'
import H1 from 'components/H1/H1'
import Icon from 'components/Icon/Icon'
import mail from 'assets/images/mail.svg'
import messenger from 'assets/images/messenger.svg'
import ScrollAnimation from 'react-animate-on-scroll'

const ContactSection = styled(Section)`
  background: ${({ theme }) => theme.bg};
  padding: 90px 0 0 0;
  height: auto;
  min-height: 640px;
`

const StyledH1 = styled(H1)`
  position: relative;
  left: 50%;
  top: 0;
  margin-bottom: 108px;
  transform: translateX(-50%);
  white-space: nowrap;
`

const H2 = styled.h2`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.mobile.h3};
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 8px;
  line-height: 4.2rem;
  transition: all 200ms ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.desktop.h3};
  }
`

const P = styled.p`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.rht};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  color: ${({ theme }) => theme.black};
  margin: 0;
  line-height: 24px;
  margin-bottom: 32px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }
`

const StyledWrapper = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: column-reverse;
  align-items: flex-start;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`

const ContactImage = styled.div`
  width: 100%;
  max-width: 666px;
  position: relative;
  padding: 0 !important;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 70%;
    max-width: 800px;
    padding-left: 10vw;
  }
`

const ContactImageShape = styled.div`
  content: '';
  position: absolute;
  width: 100%;
  height: 85%;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.blue};
  border-radius: 0 64px 0 0px;
`

const StyledImage = styled(Image)`
  ${({ theme }) => theme.mq.desktop} {
    margin-left: 144px;
  }
`

const ContactInfo = styled.div`
  width: 100%;
  padding: 16px 10vw 32px 10vw;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    padding: 88px;
    max-width: 600px;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 50%;
    margin-left: 12vw;
    max-width: 700px;
  }
`

const ContactLinks = styled.a`
  text-decoration: none;

  width: 100%;
  height: 100%;
`

const ContactLinksInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 16px 0;

  p {
    position: relative;
    font-family: ${({ theme }) => theme.font.family.rhd};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.mobile.body};
    color: ${({ theme }) => theme.blue};
    margin: 0;
    margin-left: 12px;
    line-height: 24px;
    letter-spacing: 0.03rem;

    :hover {
      text-decoration: underline;
    }
  }
`

const ContactTemplate = () => {
  return (
    <ContactSection id="kontakt" height="auto">
      <ScrollAnimation animateIn="fadeInBottom" animateOnce>
        <StyledH1 content="Skontaktuj się">Skontaktuj się</StyledH1>
      </ScrollAnimation>
      <StyledWrapper>
        <ContactImage>
          <ScrollAnimation
            animateIn="fadeInLeftWow"
            delay={300}
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              height: '100%',
              width: '100%',
            }}
            animateOnce
          >
            <ContactImageShape />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeftWow" delay={500} animateOnce>
            <StyledImage
              filename="contact.png"
              alt="Trener personalny – Klaudia Wolińska"
            />
          </ScrollAnimation>
        </ContactImage>
        <ContactInfo>
          <ScrollAnimation animateIn="fadeInBottom" delay={300} animateOnce>
            <H2>Masz pytania? Napisz do mnie.</H2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInBottom" delay={500} animateOnce>
            <P>
              Jeśli masz jakiekolwiek wątpliwości odnoście współpracy ze mną,
              diety czy treningu, pisz do mnie śmiało. Postaram się odpowiedzieć
              na wszelkie pytania możliwie jak najszybciej.
            </P>
          </ScrollAnimation>
          <ContactLinks
            target="_blank"
            href="mailto:klaudiawolinska1@gmail.com"
          >
            <ScrollAnimation animateIn="fadeInBottom" delay={700} animateOnce>
              <ContactLinksInner>
                <Icon src={mail} />
                <P>klaudiawolinska1@gmail.com</P>
              </ContactLinksInner>
            </ScrollAnimation>
          </ContactLinks>
          <ContactLinks target="_blank" href="http://m.me/112257933522277">
            <ScrollAnimation animateIn="fadeInBottom" delay={800} animateOnce>
              <ContactLinksInner>
                <Icon src={messenger} />
                <P>@klaudia-wolinska-dieta-i-trening</P>
              </ContactLinksInner>
            </ScrollAnimation>
          </ContactLinks>
        </ContactInfo>
      </StyledWrapper>
    </ContactSection>
  )
}

export default ContactTemplate
