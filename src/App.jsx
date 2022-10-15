import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Components/Post";
import Form from "./Components/Form";

const App = () => {
    const [data, setData] = useState([])
    const [formState, setFormState] = useState(false)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://v1.nocodeapi.com/tuxa5/google_sheets/WHnKyIKHJyozjqpD?tabId=Sheet1', 
            params: {},
        }).then(function (response) {
            setData(response.data.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

    const content = data.map ((e, i) => {
        return <Post key={i} id={e.Post_ID} author={e.Author} date={e.Date} content={e.Content} />
    })

    return (
        <div className="ui container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="ui button primary" onClick={() => setFormState(!formState)} style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                zIndex: '1',
            }}>Post</div>
            { formState ? <Form data={data} setData={setData} closeForm={() => setFormState(false)}/> : null }
            { content }
        </div>
    )
}

export default App;