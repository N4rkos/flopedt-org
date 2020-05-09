import React, { useEffect, useState } from 'react'
import API from '../../backend/API'
import Testimonial from './Testimonial'
import './testimonials.scss'

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        API.getRandomTestimonials().then(setTestimonials)
    }, [])

    return (
        <section className="testimonials">
            <div className="container">
                <h1>Témoignages</h1>
                <p>Découvrez ce que nos quelques uns de nos utilisateurs pensent de flop!EDT :</p>
                <div className="row display-flex">
                    {testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial} />)}
                </div>
            </div>
        </section>
    )
}

export default Testimonials