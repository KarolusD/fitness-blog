import React from 'react'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate'
import AboutMeTemplate from 'templates/AboutMeTemplate/AboutMeTemplate'
import OfferTemplate from 'templates/OfferTemplate/OfferTemplate'
import ContactTemplate from 'templates/ContactTemplate/ContactTemplate'
import NewsTemplate from 'templates/NewsTemplate/NewsTemplate'

const IndexPage = () => (
  <MainTemplate pageTitle="Home">
    <HeroTemplate />
    <AboutMeTemplate />
    <OfferTemplate />
    <NewsTemplate />
    <ContactTemplate />
  </MainTemplate>
)

export default IndexPage
