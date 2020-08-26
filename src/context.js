import React, { Component } from 'react'

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
    }

    formatedData(items) {
        let iterateRoom = items.map(i => {
            let id = i.sys.id;
            let images = i.fields.images.map(img => img.fields.file.url)
            let room = {...i.fields, images}
        })
    }

    render() {
        return (
            <RoomContext.Provider>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }