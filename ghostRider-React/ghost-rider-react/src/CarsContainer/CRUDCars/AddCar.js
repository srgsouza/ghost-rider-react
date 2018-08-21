import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './addCar.css';


class CreateCar extends Component {
    constructor() {
        super();

        this.state = {
            make: '',
            model: '',
            year: '',
            img_url: '',
            description: '',
        }
    }
    updateCar = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }

    render() {
        return (

            <div className='addCarForm'>
                <form onSubmit={this.props.addCar.bind(this, this.state)}>
                    <input type="text" name="make" onChange={this.updateCar} placeholder='make' /><br />
                    <input type="text" name="model" onChange={this.updateCar} placeholder='model' /><br />
                    <input type="text" name="year" onChange={this.updateCar} placeholder='year' /><br />
                    <input type="text" name="img_url" onChange={this.updateCar} placeholder='img_url' /><br />
                    <input type="text" name="description" onChange={this.updateCar} placeholder='description' /><br />
                    <Button type='Submit' onClick={this.props.toggle}>Submit</Button>
                </form>
            </div>
        )
    }
}

export default CreateCar;
