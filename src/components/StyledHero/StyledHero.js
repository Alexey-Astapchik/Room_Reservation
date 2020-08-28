import styled from 'styled-components';
import defaultImg from '../../images/room-9.jpeg';

const StyledHero = styled.header`
    min-height: 70vh;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;   
`

export default StyledHero;