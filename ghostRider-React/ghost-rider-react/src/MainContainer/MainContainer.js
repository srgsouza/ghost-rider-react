import React, { Component } from "react";
import Aux from '../hoc/Aux';
import CarsContainer from '../CarsContainer/CarsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavbarComponent from '../Navbar/navbar';
import classes from './MainContainer.css';
import WelcomePageModal from './WelcomePageModal';


class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      auth_token: '',
      modal: true,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    // if (this.state.logged_in) {
    //   fetch('http://localhost:8000/get_auth_token/', {
    //     headers: {
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(json => {
    //       this.setState({ username: json.username });
    //     });
    // }

  }

  handleChange = (e) => {
    console.log(e.currentTarget.value);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });

  }

  handleRegistration = async (e) => {
    console.log(this.props.csrf_token, '### GOT IN handleregistration')
    e.preventDefault();
    const data = { ...this.state, csrfmiddlewaretoken: this.props.csrf_token };
    console.log(data)
    const registrationResponse = await fetch('http://localhost:8000/api/users/', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(
        data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': this.props.csrf_token,
      }
    });

    const parsedResponse = await registrationResponse.json();
    console.log('## Parsed RESPONSE', parsedResponse);
    this.setState({ auth_token: parsedResponse.token })
    console.log(parsedResponse.status, '### PARSED RESPONSE');

    if (parsedResponse.status === 201) {
      // switch our route.
      // Programmatically switching to a new route.
      this.props.history.push('/');
    }

  }

  handleSubmit = async (e) => {
    console.log(this.props.csrf_token)
    e.preventDefault();
    const data = { ...this.state, csrfmiddlewaretoken: this.props.csrf_token };
    console.log(data)
    const loginResponse = await fetch('http://localhost:8000/get_auth_token/', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(
        data),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': this.props.csrf_token,
      }
    });

    const parsedResponse = await loginResponse.json();
    console.log("TOKEN :", parsedResponse.token);
    this.setState({ auth_token: parsedResponse.token })

    if (parsedResponse.data === 'login successful') {
      // switch our route.
      // Programmatically switching to a new route.
      this.props.history.push('/');
    }

  }
  render() {
    return (
      <div className='mainContainer'>
        <div className="welcomePage">

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>

              <WelcomePageModal />

            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Ghostride the Whip</Button>
            </ModalFooter>
          </Modal>
        </div>
        <NavbarComponent username={this.state.username} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleRegistration={this.handleRegistration} />
        <img src={require('./Ghost-Rider-Final.png')} className="logo" />
        <CarsContainer csrf_token={this.props.csrf_token} auth_token={this.state.auth_token} /><br />
        <small className="copyright">&copy; 2018 (g)HOST/RIDER<br /><img src={require('./Ghost-Rider-Final.png')} className="logo-small" />
        </small>
      </div>

    )
  }
}

export default MainContainer;
