import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './Cars.css';
import Comments from './Comments';
import CreateComment from './CRUDComments/AddComment';


const Cars = (props) => {
  const carList = props.cars.map((car, i) => {
    console.log(car, ' car id')
    console.log(props.comments[0], 'this props comments in Cars');


    return (
      <Col md='12'>


        <div key={car.id} className='specificCar'>
          <div className="car-info-full">
            <div className="car-deets">
              <span className="car-make">- {car.make} - </span><br />
              <span className="car-model">{car.model}</span><br />
              <span className="car-year">{car.year}</span><br />
              <p className="car-description">{car.description}</p>
            </div>
            <div className="car-image-div">
              <img className="car-image" src={car.img_url} />
            </div>
          </div>
          <br /><br /> <br />
          <h4 className="user-comments">User Comments on {car.make} - {car.model}:</h4><br />
          <Comments carID={car.id} comments={props.comments} deleteComment={props.deleteComment} showCommentModal={props.showCommentModal} />
          <div className='createCommentComp'>
            <CreateComment carID={'http://127.0.0.1:8000/api/cars/' + car.id} addComment={props.addComment} />
          </div><br />
          <hr />
          <h4 className="update-delete">Update/Delete Entry<br />(Available for Poster ONLY)</h4>
          <Button color='danger' onClick={props.deleteCar.bind(null, car.id)}>Delete</Button>
          <Button color='danger' onClick={props.showModal.bind(null, car.id)}>Edit</Button>
        </div>



      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {carList}
      </Row>
    </Container>
  )

};


export default Cars;
