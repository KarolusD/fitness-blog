import React from 'react'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate'
import AboutMeTemplate from 'templates/AboutMeTemplate/AboutMeTemplate'
import OfferTemplate from 'templates/OfferTemplate/OfferTemplate'
import ContactTemplate from 'templates/ContactTemplate/ContactTemplate'
import NewsTemplate from 'templates/NewsTemplate/NewsTemplate'
// import ScrollAnimation from 'react-animate-on-scroll'
import ogimage from 'assets/images/home-og.png'

const IndexPage = () => (
  <MainTemplate
    pageTitle="Trener Personalny | Klaudia Wolińska | Dieta i Trening"
    url="https://klaudiawolinska.pl"
    image={ogimage}
  >
    <HeroTemplate />
    <AboutMeTemplate />
    <OfferTemplate />

    <NewsTemplate />
    <ContactTemplate />
  </MainTemplate>
)

export default IndexPage
