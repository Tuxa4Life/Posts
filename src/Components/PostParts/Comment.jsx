import React from 'react';

const Comment = ({author, comment, date}) => {
    return (
        <div className="comment" style={{
            margin: '0px 10px',
        }}>
            <div className="content" style={{borderBottom: '1px #EEEEEE solid'}}>
                <a className="author">{ author }</a>
                <div className="metadata">
                    <span className="date">{ date }</span>
                </div>
                <div className="text">
                    { comment }
                </div>
            </div>
        </div>
    )
}

export default Comment;