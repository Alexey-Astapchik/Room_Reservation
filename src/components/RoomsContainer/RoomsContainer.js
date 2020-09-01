import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer, RoomConsumer} from '../../context'
import Loading from '../../components/Loading/Loading'


const RoomsContainer = ({context}) => {
    const { rooms, sortedRooms, loading } = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}


export default withRoomConsumer(RoomsContainer)


// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { rooms, sortedRooms, loading } = value;
//                     if (loading) {
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer
