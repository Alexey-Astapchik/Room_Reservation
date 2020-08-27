import React from 'react'
import DefaultBg from '../../images/room-1.jpeg'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom';
import {RoomContext} from '../../context';

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
        return (
            <Hero hero='roomsHero'>
                <Banner title={`${name} room`}/>
                <Link to='/rooms' className='btn-primary'>
                    Back to rooms
                </Link>
            </Hero>
        )
    }
}

export default SingleRoom_page;