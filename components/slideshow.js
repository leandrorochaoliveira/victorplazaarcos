import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

export default function Slideshow (props) {

  const properties = {
    prevArrow: <span></span>,
    nextArrow: <span></span>,
}

  return (
    <div className="slide-container w-full h-full fixed left-0 top-0 z-0">
       <Fade  {...properties} className="h-full">
        {props.images.map((fadeImage, index) => (
          <div className="each-fade h-full" key={index}>
            <div className="image-container h-full">
              <Image className="max-w-full max-h-full" src={fadeImage} alt={'Image'+index} width={1920} height={1440} />
            </div>
       
          </div>
        ))}
        </Fade>
      </div>
    )
}