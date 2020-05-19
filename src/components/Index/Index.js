import React from 'react'
import Landing from '../Landing/Landing'
import Presentation from '../Presentation/Presentation'
import Slideshow from '../Slideshow/Slideshow'
import Users from '../Users/Users'
import Testimonials from '../Testimonials/Testimonials'
import Questions from '../Questions/Questions'
import Newsletter from '../Newsletter/Newsletter'

const Index = () => {
    document.title = 'Accueil | flop!EDT'
    return (
        <div>
            <Landing />
            <Presentation />
            <Slideshow />
            <Users />
            <Testimonials />
            <Questions />
            <Newsletter />
        </div>
    )
}

export default Index