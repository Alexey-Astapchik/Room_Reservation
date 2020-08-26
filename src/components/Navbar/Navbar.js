import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import { AiOutlineMenu } from "react-icons/ai";

class Navbar extends React.Component {

    state={
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    
    }

    render () {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <div>
                        <Link className='nav-logo'>
                            <img src={logo} />
                        </Link>
                        </div>
                        <button type='button' 
                            className='nav-btn'
                            onClick={this.handleToggle}
                        >
                            <AiOutlineMenu/>
                        </button>
                    </div>
                   
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        )
    }
}


export default Navbar