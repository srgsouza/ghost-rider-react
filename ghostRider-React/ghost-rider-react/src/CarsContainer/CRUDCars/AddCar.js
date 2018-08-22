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
                <div className="add-car">
                    <form onSubmit={this.props.addCar.bind(this, this.state)}>
                        <div className="vehicle-input">
                            Vehicle Make: <input type="text" name="make" onChange={this.updateCar} placeholder='make' /><br />
                        </div>
                        <div className="vehicle-input">
                            Vehicle Model: <input type="text" name="model" onChange={this.updateCar} placeholder='model' /><br />
                        </div>
                        <div className="vehicle-input">
                            Year of Vehicle: <input type="text" name="year" onChange={this.updateCar} placeholder='year' /><br />
                        </div>
                        <div className="vehicle-input">
                            Vehicle Image URL: <input type="text" name="img_url" onChange={this.updateCar} placeholder='img_url' /><br />
                        </div>
                        <div className="vehicle-input">
                            Vehicle Description: <input type="text" name="description" onChange={this.updateCar} placeholder='description' /><br /><br />
                        </div>
                        <Button type='Submit' onClick={this.props.toggle}>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateCar;
