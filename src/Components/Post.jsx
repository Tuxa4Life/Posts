import React from "react";

const Post = ({id, author, date, content, likes, comments}) => {

    return (
        <div className="ui card" data-id={ id } style={{
            margin: '10px 0'
        }}>
            <div className="content">
                <div className="right floated meta">{ date }</div>
                { author }
            </div>
            <div className="content">
                <p style={{
                    fontSize: '16px'
                }}>
                    { content }
                </p>
            </div>
            <div className="content">
                <span className="right floated">
                <i className="heart outline like icon"></i>
                0 likes
                </span>
                <i className="comment icon"></i>
                0 comments
            </div>
            <div className="extra content">
                <div className="ui large transparent input">
                    <input type="text" placeholder="Add Comment..." />
                </div>
            </div>
        </div>
    )
}

export default Post;