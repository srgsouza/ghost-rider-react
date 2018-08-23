import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classes from './Comments.css';
import EditComment from './CRUDComments/EditComment';

const Comments = (props) => {

  let apiCarID = 'http://127.0.0.1:8000/users/api/cars/' + props.carID;

  const commentList = props.comments.map((comment, i) => {
    // console.log(comment, ' comment id, this is why we needed the checkbox, will discuss')
    if (apiCarID === comment.car) {
      return (

        <Col md='12'>
          <div key={comment.id} className='specificComment'>
            <span>{comment.comment}</span><br />
            <Button color='danger' onClick={props.deleteComment.bind(null, comment.id)}>Delete</Button>



            <div className="addCarBTN">
              <Button color="danger" onClick={props.showCommentModal.bind(null, comment.id)}>Edit Comment</Button>
              <Modal isOpen={props.modal2} toggle2={props.toggle2}>
                <ModalHeader className="modal-header" toggle2={props.toggle2}>Edit Your Comment Below:</ModalHeader>
                <ModalBody>

                  <EditComment closeAndEditComment={props.closeAndEditComment}
                    handleCommentFormChange={props.handleCommentFormChange}
                    commentToEdit={props.commentToEdit}
                  />

                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={props.toggle2}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>



          </div>
        </Col>


      )
    }
  })


  return (
    <Container>
      <Row>
        {commentList}
      </Row>
    </Container>
  )


};


export default Comments;
