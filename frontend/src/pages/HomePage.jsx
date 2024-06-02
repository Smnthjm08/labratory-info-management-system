import React from 'react'
import NavBar from '../components/Home/NavBar'
import Hero from '../components/Home/Hero'
import Analytics from '../components/Home/Analytics'
import Newsletter from '../components/Home/Newsletter'
import Cards from '../components/Home/Cards'
import Footer from '../components/Home/Footer'

const HomePage = () => {
    return (
        <div className='bg-black'>
            <NavBar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomePage