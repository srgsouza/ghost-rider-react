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
          <span>{car.make}</span><br />
          <span>{car.model}</span><br />
          <Button color='danger' onClick={props.deleteCar.bind(null, car.id)}>Delete</Button>
          <Button color='danger' onClick={props.showModal.bind(null, car.id)}>Edit</Button>

          <Comments carID={car.id} comments={props.comments} deleteComment={props.deleteComment} showCommentModal={props.showCommentModal} />
          <div className='createCommentComp'>
            <CreateComment carID={'http://127.0.0.1:8000/api/cars/' + car.id} addComment={props.addComment} />
          </div>
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
