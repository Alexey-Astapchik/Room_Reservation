import React from 'react'
import DefaultBg from '../../images/room-1.jpeg'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom';
import {RoomContext} from '../../context';
import StyledHero from '../../components/StyledHero/StyledHero'

class SingleRoom_page extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            slug: this.props.match.params.slug,
            DefaultBg
       }
    }
    static contextType = RoomContext;

   

    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) { 
            return (
                <div className='error'> 
                    <h3>No such room is found</h3>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </div>
            )
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, img1, img2] = images
        return (
            <>
                <Hero hero='roomsHero'>
                    <Banner title={`${name} room`}/>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </Hero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className='desc'>
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h4>info</h4>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>
                                max capacity: {' '}
                                {capacity > 1 ? `${capacity} people` : 
                                `${capacity} person`}
                            </h6>
                            <h6>{pets ? "Pets allowed" : 'No pets allowed'}</h6>
                            <h6>{breakfast && 'Free breakfast'}</h6>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                        <h6>Extras</h6>
                        <ul className='extras'>
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                        </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom_page;