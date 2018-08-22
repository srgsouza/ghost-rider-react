import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Login from '../Login/Login';
// import Logout from '../Logout';
import Register from '../Login/Register';
// import classes from './Navbar.css';

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    // handles the on/off for the navbar toggler
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(props) {
        return (
            <div>
                <Navbar color="rgba(24,24,24,0.9)" light expand="md" className='navBar'>
                    <NavbarBrand href="/" image-src="/public/images" ></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Login username={this.props.username} password={this.props.password} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}
                            />
                            <Register handleChange={this.props.handleChange} handleRegistration={this.props.handleRegistration} />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
