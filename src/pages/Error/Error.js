import React from 'react'
import Banner from '../../components/Banner/Banner';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero/Hero';

const Error = () => {
    return (
        <Hero>
            <Banner title='404' subtitle='Page is not found'>
                <Link to='/' className='btn-primary'>
                    Return home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error;
