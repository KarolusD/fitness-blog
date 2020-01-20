import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Section from 'components/Section/Section'
import H1 from 'components/H1/H1'
import OfferItem from 'components/OfferItem/OfferItem'
import PopUp from 'components/PopUp/PopUp'
import GoogleForm from 'components/GoogleForm/GoogleForm'
import ScrollAnimation from 'react-animate-on-scroll'

const StyledSection = styled(Section)`
  padding: 90px 0 0 0;
  height: auto;
  min-height: 640px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 120px 0 0 0;
  }
`

const StyledH1 = styled(H1)`
  && {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 80px;
    ${({ theme }) => theme.mq.tablet} {
      margin-bottom: 108px;
    }
  }
`

const StyledOfferItem = styled(OfferItem)`
  &&& {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.lightAzure},
      ${({ theme }) => theme.lightRose}
    );

    ${({ theme }) => theme.mq.desktop} {
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.lightAzure} 0%,
        ${({ theme }) => theme.lightRose} 80%,
        transparent 80%
      );
    }
  }
`

const OfferTemplate = () => {
  const themeContext = useContext(ThemeContext)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const DIET_FORM = [
    'https://docs.google.com/forms/d/e/1FAIpQLSeb-juteqPWdel4tTzIZvtIp-a2W-Dq82wXduQ8PACPgSWuzw/viewform?embedded=true',
    '3200',
    'dieta-online',
  ]

  const WORKOUT_FORM = [
    'https://docs.google.com/forms/d/e/1FAIpQLScv675a-7kUq_qL8AP-Cdw1YeixwTFkishHpp2rKuxotygdxA/viewform?embedded=true',
    '4100',
    'trening-online',
  ]

  const DIET_AND_WORKOUT_FORM = [
    'https://docs.google.com/forms/d/e/1FAIpQLSczx8x5wqWvo659s45azGbh1Mjx0ZQgskN7HHohq1XaFinp2Q/viewform?embedded=true',
    '5100',
    'dieta-i-trening-online',
  ]

  useEffect(() => {
    if (isFormOpen) {
      document.querySelector('body').classList.add('lock-scroll')
    } else {
      document.querySelector('body').classList.remove('lock-scroll')
    }
  }, [isFormOpen])

  const openGoogleForm = e => {
    e.preventDefault()
    setIsFormOpen(true)

    const allForms = document.querySelectorAll('.google-form')
    allForms.forEach(form => {
      if (form.title === e.currentTarget.id) {
        form.style.display = 'block'
        form.parentElement.parentElement.style.display = 'flex'
      } else {
        form.style.display = 'none'
        form.parentElement.parentElement.style.display = 'none'
      }
    })
  }

  const closeGoogleForm = e => {
    e.preventDefault()
    e.currentTarget.parentElement.parentElement.style.display = 'none'
    setIsFormOpen(false)
  }

  return (
    <>
      <StyledSection id="oferta">
        <ScrollAnimation animateIn="fadeInBottom" animateOnce>
          <StyledH1 content="Oferta">Oferta</StyledH1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInBottom" delay={300} animateOnce>
          <OfferItem
            id="dieta-online"
            title="Dieta online"
            offerList={[
              'ankieta',
              'wywiad żywieniowy',
              'rozpisanie diety',
              'cotygodniowy raport postępów',
              'zmiany uzależnione od potrzeb',
            ]}
            firstPrice="90zł / 1 mies."
            secondPrice="240zł / 3 mies."
            leftImage={false}
            imageName="dieta-online.png"
            color={themeContext.blue}
            background={themeContext.lightAzure}
            alt="Zdrowe jedzenie - kanapka z jajkiem i rukolą"
            openGoogleForm={openGoogleForm}
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInBottom" animateOnce>
          <OfferItem
            id="trening-online"
            title="Trening online"
            offerList={[
              'ankieta',
              'wywiad treningowy',
              'rozpisanie treningu',
              'cotygodniowy raport postępów',
              'zmiany uzależnione od potrzeb',
            ]}
            firstPrice="80zł / 1 mies."
            secondPrice="190zł / 3 mies."
            leftImage
            imageName="trening-on.png"
            color={themeContext.pink}
            background={themeContext.lightRose}
            alt="Dobry trening - człowiek podnoszący sztange"
            openGoogleForm={openGoogleForm}
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInBottom" animateOnce>
          <StyledOfferItem
            id="dieta-i-trening-online"
            title="Dieta i trening online"
            offerList={[
              'ankieta',
              'wywiad żywieniowy i treningowy',
              'rozpisanie diety i treningu',
              'cotygodniowy raport postępów',
              'zmiany uzależnione od potrzeb',
            ]}
            firstPrice="150zł / 1 mies."
            secondPrice="350zł / 3 mies."
            leftImage={false}
            imageName="dieta-i-trening-online.png"
            color={themeContext.blue}
            background={themeContext.lightAzure}
            alt="Zdrowe jedzenie oraz dobry trening"
            openGoogleForm={openGoogleForm}
          />
        </ScrollAnimation>
      </StyledSection>
      <PopUp
        className="pop-up"
        isOpen={isFormOpen}
        closePopUp={closeGoogleForm}
      >
        <GoogleForm
          src={DIET_FORM[0]}
          height={DIET_FORM[1]}
          title={DIET_FORM[2]}
          width="640"
        />
      </PopUp>
      <PopUp
        className="pop-up"
        isOpen={isFormOpen}
        closePopUp={closeGoogleForm}
      >
        <GoogleForm
          src={WORKOUT_FORM[0]}
          height={WORKOUT_FORM[1]}
          title={WORKOUT_FORM[2]}
          width="640"
        />
      </PopUp>
      <PopUp
        className="pop-up"
        isOpen={isFormOpen}
        closePopUp={closeGoogleForm}
      >
        <GoogleForm
          src={DIET_AND_WORKOUT_FORM[0]}
          height={DIET_AND_WORKOUT_FORM[1]}
          title={DIET_AND_WORKOUT_FORM[2]}
          width="640"
        />
      </PopUp>
    </>
  )
}

export default OfferTemplate
