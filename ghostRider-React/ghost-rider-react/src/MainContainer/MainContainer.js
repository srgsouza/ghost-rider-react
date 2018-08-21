import React, { Component } from "react";
import Aux from '../hoc/Aux';
import CarsContainer from '../CarsContainer/CarsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../Navbar/navbar';
import classes from './MainContainer.css';


class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      auth_token: '',
    };
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

  handleSubmit = async (e) => {
    console.log(this.props.csrf_token)
    e.preventDefault();
    const data = {...this.state, csrfmiddlewaretoken: this.props.csrf_token};
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
    console.log(parsedResponse);
    this.setState({auth_token:parsedResponse.token})

    if (parsedResponse.data === 'login successful') {
      // switch our route.
      // Programmatically switching to a new route.
      this.props.history.push('/');
    }

  }
  render() {
    return (
      <div className='mainContainer'>
        <NavbarComponent username={this.state.username} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <img src={require('./Ghost-Rider-Final.png')} className="logo" />
        <CarsContainer csrf_token={this.props.csrf_token} auth_token={this.state.auth_token} />
      </div>

    )
  }
}

export default MainContainer;
