import React, { Component } from 'react'
import items from './data'
import Room from './components/Room/Room'
import Client from './Contentful'





const RoomContext = React.createContext()

class RoomProvider extends React.Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false, 
        pets: false 
    }

    getData = async() => {
        try {
            let response = await Client.getEntries({
                content_type: 'resortRoom'
            });
        } catch (error) {
            console.log('error!')
        }
    }

    componentDidMount() {
        let rooms = this.formatedData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            maxPrice,
            maxSize
        });
    } 

    formatedData(items) {
        let iterateRooms = items.map(i => {
            let id = i.sys.id;
            let images = i.fields.images.map(img => img.fields.file.url)
            let room = { ...i.fields, images, id }
            return room
        })
        return iterateRooms
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug)
        return room;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        this.setState(
        {
            [name]: value
        }, 
        this.filterRooms)
    }

    filterRooms = () => {
        let { 
            rooms, 
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast, 
            pets 
        } = this.state;

        let tempRooms = [...rooms];

        capacity = parseInt(capacity);

        tempRooms = tempRooms.filter(room => room.price <= price)

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        if (capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        this.setState({
            sortedRooms: tempRooms,

        })
    }

    render() {
        return (    
            <RoomContext.Provider 
                value={{...this.state, 
                        getRoom: this.getRoom,
                        handleChange: this.handleChange
                    }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;


export function withRoomConsumer(Component) {
    return function ConsumerWrapper (props) {
        return (
        <RoomConsumer>
            {
                value => <Component {...props} context={value}/>
            }
        </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext }