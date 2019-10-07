import React, { useContext } from 'react'
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

  return (
    <StyledSection id="oferta">
      <StyledH1 content="Oferta">Oferta</StyledH1>
      <OfferItem
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
      />

      <OfferItem
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
      />

      <StyledOfferItem
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
      />
    </StyledSection>
  )
}

export default OfferTemplate
