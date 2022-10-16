import React from "react";
import Comment from "./Comment";

const Comments = ({ data }) => {
    const comments = data.map((e, i) => {
        return <Comment key={i} author={e.user} comment={e.comment} date={e.date}/>
    })

    return (
        <div className="ui comments">
            {comments}
        </div>
    )
}

export default Comments