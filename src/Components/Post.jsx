import React, { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./PostParts/Comments";

const Post = ({id, row_id, author, date, content, likes, comments}) => {
    const [commentsArr, setCommentsArr] = useState([{}])

    const [comment, setComment] = useState('')
    const [commentState, setCommentState] = useState(false)

    useEffect(() => {
        setCommentsArr(JSON.parse(comments))
    }, [])

    const uploadComment = () => {
        let tmpArr = [...commentsArr]

        let date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 

        tmpArr.push({user: localStorage.getItem('username'), comment: comment, date: date})
        setCommentsArr(tmpArr)
        setComment('')

        console.log(commentsArr)

        axios({
            method: 'put',
            url: 'https://v1.nocodeapi.com/tuxa6/google_sheets/htizjhWfRQFGLCiw?tabId=Sheet1', 
            params: {},
            data: {"row_id": row_id, "Comments": JSON.stringify(tmpArr)}
        }).then(function (response) {
            console.log({"row_id": row_id, "Comments": JSON.stringify(tmpArr)})
        }).catch(function (error) {
            console.log(error);
        })       
    }

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

                <span style={{cursor: 'pointer'}} onClick={() => setCommentState(!commentState)}>
                    <i className="comment icon"></i>
                    {commentsArr.length} comments
                </span>
            </div>

            { commentState ? <Comments data={commentsArr}/> : null}

            <div className="extra content">
                <div className="ui large transparent input">
                    <input type="text" placeholder="Add Comment..." onChange={e => setComment(e.target.value)} value={comment}/>
                </div>
                <i className="send icon" style={{marginLeft: '20%', cursor: 'pointer'}} onClick={uploadComment}></i>
            </div>
        </div>
    )
}

export default Post;