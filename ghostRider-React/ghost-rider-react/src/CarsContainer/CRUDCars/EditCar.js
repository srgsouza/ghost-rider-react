import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


const EditCar = (props) => {

    return (
        <div className='addCarForm'>
            <div className="add-car">
                <form onSubmit={props.closeAndEdit} >
                    <div className="vehicle-input">
                        Vehicle Make: <input type="text" name="make" onChange={props.handleFormChange} placeholder="make" /><br />
                    </div>
                    <div className="vehicle-input">
                        Vehicle Model:  <input type="text" name="model" onChange={props.handleFormChange} placeholder="model" /><br />
                    </div>
                    <div className="vehicle-input">
                        Year of Vehicle: <input type="text" name="year" onChange={props.handleFormChange} placeholder="year" /><br />
                    </div>
                    <div className="vehicle-input">
                        Vehicle Image URL: <input type="text" name="img_url" onChange={props.handleFormChange} placeholder="img_url" /><br />
                    </div>
                    <div className="vehicle-input">
                        Vehicle Description: <input type="text" name="description" onChange={props.handleFormChange} placeholder="description" /><br /><br />
                    </div>
                    <Button type='Submit' onClick={props.toggle1}>Edit Car</Button>
                </form>
            </div>
        </div>

    )
}

export default EditCar;
