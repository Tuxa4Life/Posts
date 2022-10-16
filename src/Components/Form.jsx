import React, { useState } from "react";
import axios from "axios";

const Form = ({ username, data, setData, closeForm }) => {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const sendData = (e) => {
        e.preventDefault()

        setLoading(true)

        let date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
        let id = `P${Math.round(Date.now() * Math.random())}`

        axios({
            method: 'post',
            url: 'https://v1.nocodeapi.com/tuxa4/google_sheets/ocxrytkzUDSFFJrd?tabId=Sheet1', // (1)
            params: {},
            data: [[id, username, content, '[]', '[]', date]]
        }).then(function () {
            setLoading(false)
            setContent('')
            closeForm()

            // replication
            let replica = [...data]
            replica.push({Post_ID: id, Author: username, Content: content, Likes: '{}', Comments: '{}', Date: date})
            setData(replica)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            zIndex: '2'
        }}>
            <form onSubmit={sendData} className="ui form" style={{
                position: 'fixed',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'white',
                border: '1px black solid',
                borderRadius: '5px',
                padding: '15px'
            }}>
                <div className="field">
                    <label>Content</label>
                   <textarea style={{width: '300px', height: '100px'}} type="text" onChange={e => setContent(e.target.value)} value={content}/>
                </div>
                <button className={`ui button green right floated ${ loading ? 'loading' : '' }`}>Post</button>
                <button className="ui button right floated" onClick={e => {
                    e.preventDefault()
                    closeForm()
                }}>Cancel</button>
            </form>
        </div>
    )
}

export default Form;