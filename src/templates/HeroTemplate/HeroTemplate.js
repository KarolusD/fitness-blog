import React from 'react'
import Image from 'components/Image/Image'

const HeroTemplate = () => {
  return (
    <section
      style={{ width: '100vw', height: '100vh', paddingTop: '100px' }}
      id="home"
    >
      <p>hello!</p>
      <Image alt="something" filename="gatsby-astronaut.png" />
    </section>
  )
}

export default HeroTemplate
