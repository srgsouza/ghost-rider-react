import React from 'react';
import { Button } from 'reactstrap';


const EditComment = (props) => {

    return (
        <div>
            <h4> Edit Comment</h4>
            <form onSubmit={props.closeAndEditComment}>
                <label>
                    Edit Comment:
                    <input type="text" name="comment" onChange={props.handleCommentFormChange} value={props.commentToEdit.comment} />

                </label>
                <Button type='Submit'>Edit Comment</Button>
            </form>
        </div>

    )
}

export default EditComment;
