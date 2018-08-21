import React, { Component } from 'react';
import { Button } from 'reactstrap';


class CreateComment extends Component {
  constructor() {
    super();

    this.state = {
      comment: '',
      car: '',
    }
  }

  updateComment = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.addComment.bind(this, this.state)}>
          <input type="text" name="comment" onChange={this.updateComment} placeholder='add comment/review' />
          <input type="checkbox" name="car" value={this.props.carID} onChange={this.updateComment} />
          <Button color='danger' type='Submit'>Comment</Button>
          <Button color='danger' type='reset'>Reset</Button>
        </form>
      </div>

    )
  }
}

export default CreateComment;
