import React from 'react';


const EditCar = (props) => {

    return (
        <div>
            <h4> Edit Car</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Edit Car:
                    <input type="text" name="make" onChange={props.handleFormChange} value={props.carToEdit.make} placeholder="make" />
                    <input type="text" name="model" onChange={props.handleFormChange} value={props.carToEdit.model} placeholder="model" />
                    <input type="text" name="year" onChange={props.handleFormChange} value={props.carToEdit.year} placeholder="year"/>
                    <input type="text" name="img_url" onChange={props.handleFormChange} value={props.carToEdit.img_url} placeholder="img_url" />
                    <input type="text" name="description" onChange={props.handleFormChange} value={props.carToEdit.description} placeholder="description" />
                </label>
                <input type='Submit' value="Edit Car" />
            </form>
        </div>

    )
}

export default EditCar;
