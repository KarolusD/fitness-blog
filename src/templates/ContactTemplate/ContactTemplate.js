import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section/Section'
import Image from 'components/Image/Image'
import H1 from 'components/H1/H1'
import Icon from 'components/Icon/Icon'
import mail from 'assets/images/mail.svg'
import messenger from 'assets/images/messenger.svg'

const ContactSection = styled(Section)`
  background: ${({ theme }) => theme.bg};
  padding: 180px 0 0 0;
  height: auto;
  min-height: 640px;
`

const StyledH1 = styled(H1)`
  position: absolute;
  left: 50%;
  top: 80px;
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

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 85%;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.blue};
    border-radius: 0 64px 0 0px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 70%;
    max-width: 800px;
    padding-left: 10vw;

    ::before {
      width: 900px;
    }
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
      <StyledH1 content="Skontaktuj się">Skontaktuj się</StyledH1>
      <StyledWrapper>
        <ContactImage>
          <Image
            filename="contact.png"
            alt="Trener personalny – Klaudia Wolińska"
          />
        </ContactImage>
        <ContactInfo>
          <H2>Masz pytania? Napisz do mnie.</H2>
          <P>
            Jeśli masz jakiekolwiek wątpliwości odnoście współpracy ze mną,
            diety czy treningu, pisz do mnie śmiało. Postaram się odpowiedzieć
            na wszelkie pytania możliwie jak najszybciej.
          </P>
          <ContactLinks
            target="_blank"
            href="mailto:klaudiawolinska1@gmail.com"
          >
            <ContactLinksInner>
              <Icon src={mail} />
              <P>klaudiawolinska1@gmail.com</P>
            </ContactLinksInner>
          </ContactLinks>
          <ContactLinks target="_blank" href="https://m.me/klaudia.wolinska.9">
            <ContactLinksInner>
              <Icon src={messenger} />
              <P>@klaudiawolinka1</P>
            </ContactLinksInner>
          </ContactLinks>
        </ContactInfo>
      </StyledWrapper>
    </ContactSection>
  )
}

export default ContactTemplate
