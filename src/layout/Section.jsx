import React, { useRef } from 'react'

const Section = ({ container = true, padding = true, paddingX = true, paddingY = true, id, children, className, ref }) => {
  return (
    <section id={id} ref={ref} className={`relative ${className} ${container ? 'container mx-auto' : ''} ${paddingX ? 'px-4 sm:px-5' : ''} ${paddingY ? 'py-8 sm:py-12 lg:py-24' : ''} `}>
      {children}
    </section>
  )
}

export default Section
