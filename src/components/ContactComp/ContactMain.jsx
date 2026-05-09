import React from 'react'
import ContactHead from './ContactHead'
import Marque from './Marque'
import Follow from './Follow'

const ContactMain = () => {
  return (
    <div className='max-md:mb-[20vh]'>
      <ContactHead />
      <Marque />
      <Follow />
    </div>
  )
}

export default ContactMain
