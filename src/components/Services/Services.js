import React, { Component } from 'react'
import Title from './Title';
import { FaHiking, FaWifi, FaWineGlassAlt, FaSwimmingPool } from "react-icons/fa"

class Services extends React.Component {
    state= {
        services:[
                    {
                        icon: <FaHiking/>,
                        title: 'Free hiking with our coach',
                        info: 'Click (Generate) to create a new font pairing, (Lock) to lock fonts that you want to keep, and (Edit) to choose a font manually. The text is editable, try replacing it with your company name or other copy.'
                    },
                    {
                        icon: <FaWifi/>,
                        title: 'Free WiFi',
                        info: 'You will be always connected with your friends. Our provider offered us the best connect for the wild forest'
                    },
                    {
                        icon: <FaWineGlassAlt/>,
                        title: 'Free Wine',
                        info: 'Welcome to our bar! We invite you to try italian and french wine'
                    },
                    {
                        icon: <FaSwimmingPool/>,
                        title: 'Free SwimmingPool',
                        info: 'Click (Generate) to create a new font pairing, (Lock) to lock fonts that you want to keep, and (Edit) to choose a font manually. The text is editable, try replacing it with your company name or other copy.'
                    }
                ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="Our Services"/>
                <div className='services-center'>
                {this.state.services.map((item, index) => {
                    return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}

export default Services