import React, { useState, useEffect } from 'react'
import './slideshow.scss'
import API from '../../backend/API'

const Slideshow = () => {

    const [slides, setSlides] = useState([])

    useEffect(() => {
        API.getSlides().then(setSlides)
    })

    return (
        <div></div>
        // <section className="flop__screenshots">
        //     {/* <img className="wave__down" src="{{ asset('build/svg/screens_up.svg') }}" alt="" /> */}
        //     <div className="wrapper">
        //         <div className="flop__screenshots__content col justify-center">
        //             <h1>Aperçu de l'application</h1>
        //             <div className="swiper-container">
        //                 <div className="swiper-wrapper">
        //                     {slides.map(slide => (
        //                         <div key={Math.random()} className="swiper-slide"><img src={API.getAsset(slide.image[0].url)} alt={slide.id}></img></div>
        //                     ))}
        //                 </div>
        //                 <div className="swiper-pagination"></div>
        //                 <div className="swiper-button-next"></div>
        //                 <div className="swiper-button-prev"></div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Slideshow