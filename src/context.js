import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext()

class RoomProvider extends React.Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    componentDidMount() {
        let rooms = this.formatedData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
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

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }