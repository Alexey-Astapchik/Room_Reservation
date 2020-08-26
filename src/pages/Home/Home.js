import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom';
import Services from '../../components/Services/Services'

const Home = () => {

    return (
        <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle='Deluxe rooms starting from $300'>
                <Link to='/rooms' className='btn-primary'/>
            </Banner>
        </Hero>
        <Services/>
        </>
    )
}

export default Home