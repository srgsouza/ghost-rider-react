import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './addCar.css';
import axios from "axios";


class CreateCar extends Component {
    constructor() {
        super();

        this.state = {
            make: '',
            model: '',
            year: '',
            img_url: '',
            description: '',
            images: null,
        }
    }
    updateCar = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }

    fileSelectedHandler = (event) => {
        this.setState({ images: event.target.files[0] })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.images, this.state.images.name);
        axios.post('http://127.0.0.1:8000/api/cars/', fd)
            .then(res => {
                console.log(res);
            });
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
                        <div>
                            <input type="file" onChange={this.fileSelectedHandler} /><br />
                            <Button onClick={this.fileUploadHandler}>Upload</Button>
                        </div>
                        <Button type='Submit' onClick={this.props.toggle}>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateCar;
