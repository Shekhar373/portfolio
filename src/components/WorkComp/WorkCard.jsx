import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import React, { useEffect } from 'react'

const WorkCard = () => {

  gsap.registerPlugin(ScrollTrigger)

  const WorkImage = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  useEffect(() => {
    gsap.utils.toArray(".workcard-main").forEach(workcard => {
      gsap.from(workcard, {
        height: 100,

        scrollTrigger: {
          trigger: workcard,
          // markers: true,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true
        }
      })
    })
  })


  return (
    <>

      {WorkImage.map((WorkImage, index) => {
        return <div className='h-[60vh] mb-5' >
          <div id={index} className='workcard-main h-full flex gap-2 px-4   w-full relative '>
            <div id={index} className=' workcard h-full w-1/2  hover:rounded-4xl overflow-hidden transition-all'>
              <img className='h-full w-full object-cover ' src={WorkImage.image1} alt="" />
            </div>
            <div id={index} className=' workcard h-full w-1/2  hover:rounded-4xl overflow-hidden transition-all'>
              <img className='h-full w-full object-cover' src={WorkImage.image2} alt="" />
            </div>
          </div>
        </div>
      })}

    </>
  )
}

export default WorkCard
