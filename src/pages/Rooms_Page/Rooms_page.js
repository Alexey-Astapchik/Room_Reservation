import React from 'react'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';

const Rooms_page = () => {
    return (
        <>
        <div>
            <Hero hero='roomsHero'>
                <Banner title="Our rooms">
                    <Link to='/' className='btn-primary'>
                        Return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </div>
        </>
    )
}
export default Rooms_page