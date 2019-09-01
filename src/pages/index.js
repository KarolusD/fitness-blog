import React from 'react'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate'
import AboutMeTemplate from 'templates/AboutMeTemplate/AboutMeTemplate'
import OfferTemplate from 'templates/OfferTemplate/OfferTemplate'
import ContactTemplate from 'templates/ContactTemplate/ContactTemplate'

const IndexPage = () => (
  <MainTemplate pageTitle="Home">
    <HeroTemplate />
    <AboutMeTemplate />
    <OfferTemplate />
    <ContactTemplate />
  </MainTemplate>
)

export default IndexPage
