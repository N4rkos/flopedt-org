import React from 'react'

const Testimonial = ({ testimonial }) => {

    return (
        <div className="col-md-4 col-sm-12 my-3">
            <div className="testimonial d-flex flex-column">
                <div className="d-flex">
                    <i class="fas fa-quote-right flop__green mr-3"></i>
                    <p><small>{testimonial.testimonial}</small></p>
                </div>
                <div className="d-flex justify-content-end">
                    <small><strong>{testimonial.name}</strong></small>
                </div>
                <div className="d-flex justify-content-end text-right">
                    <small>{testimonial.poste}</small>
                </div>
            </div>
        </div>
    )
}

export default Testimonial