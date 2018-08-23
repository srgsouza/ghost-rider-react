import React from 'react';
import { Button } from 'reactstrap';


const EditComment = (props) => {

    return (
        <div className="add-car">
            <form onSubmit={props.closeAndEditComment}>
                <label>
                    Comment: &nbsp;
                    <input type="text" name="comment" onChange={props.handleCommentFormChange} value={props.commentToEdit.comment} />

                </label>
                <Button type='Submit'>Edit Comment</Button>
            </form>
        </div>

    )
}

export default EditComment;
