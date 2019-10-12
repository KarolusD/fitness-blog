import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Section from 'components/Section/Section'
import H1 from 'components/H1/H1'
import OfferItem from 'components/OfferItem/OfferItem'

const StyledSection = styled(Section)`
  padding: 180px 0 0 0;
  height: auto;
  min-height: 640px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 240px 0 0 0;
  }
`

const StyledH1 = styled(H1)`
  && {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
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
    '2800',
  ]

  const WORKOUT_FORM = [
    'https://docs.google.com/forms/d/e/1FAIpQLScv675a-7kUq_qL8AP-Cdw1YeixwTFkishHpp2rKuxotygdxA/viewform?embedded=true',
    '3500',
  ]

  const DIET_AND_WORKOUT_FORM = [
    'https://docs.google.com/forms/d/e/1FAIpQLSczx8x5wqWvo659s45azGbh1Mjx0ZQgskN7HHohq1XaFinp2Q/viewform?embedded=true',
    '4450',
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
        form.parentElement.style.display = 'flex'
      } else {
        form.style.display = 'none'
        form.parentElement.style.display = 'none'
      }
    })
  }

  const closeGoogleForm = e => {
    e.preventDefault()
    e.currentTarget.parentElement.style.display = 'none'
    setIsFormOpen(false)
  }

  return (
    <StyledSection id="oferta">
      <StyledH1 content="Oferta">Oferta</StyledH1>
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
        firstPrice="80zł / 1 mies."
        secondPrice="170zł / 3 mies."
        leftImage={false}
        imageName="dieta-online.png"
        color={themeContext.blue}
        background={themeContext.lightAzure}
        alt="Zdrowe jedzenie - kanapka z jajkiem i rukolą"
        openGoogleForm={openGoogleForm}
        closeGoogleForm={closeGoogleForm}
        formSrc={DIET_FORM[0]}
        formHeight={DIET_FORM[1]}
        formTitle="dieta-online"
        isFormOpen={isFormOpen}
      />

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
        firstPrice="70zł / 1 mies."
        secondPrice="150zł / 3 mies."
        leftImage
        imageName="trening-online.png"
        color={themeContext.pink}
        background={themeContext.lightRose}
        alt="Dobry trening - człowiek podnoszący sztange"
        openGoogleForm={openGoogleForm}
        closeGoogleForm={closeGoogleForm}
        formSrc={WORKOUT_FORM[0]}
        formHeight={WORKOUT_FORM[1]}
        formTitle="trening-online"
        isFormOpen={isFormOpen}
      />

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
        firstPrice="130zł / 1 mies."
        secondPrice="270zł / 3 mies."
        leftImage={false}
        imageName="dieta-i-trening-online.png"
        color={themeContext.blue}
        background={themeContext.lightAzure}
        alt="Zdrowe jedzenie oraz dobry trening"
        openGoogleForm={openGoogleForm}
        closeGoogleForm={closeGoogleForm}
        formSrc={DIET_AND_WORKOUT_FORM[0]}
        formHeight={DIET_AND_WORKOUT_FORM[1]}
        formTitle="dieta-i-trening-online"
        isFormOpen={isFormOpen}
      />
    </StyledSection>
  )
}

export default OfferTemplate
