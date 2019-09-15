const scrollToElement = require('scroll-to-element')

const scrollTo = (e, target) => {
  if (typeof window !== 'undefined') {
    if (window.location.pathname === '/') {
      e.preventDefault()
      scrollToElement(target, {
        offset: -80,
        ease: 'outCube',
        duration: 1000,
      })
    }
  }
}

export default scrollTo
