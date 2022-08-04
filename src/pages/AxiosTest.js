// axios 테스트용
import React, { useEffect } from "react";
import axios from 'axios';

const AxiosTest = () => {
    // get 받아오기
    const getResult = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => console.log(response));
    }

    const postResult = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
        id:"11",
        username:"ex",
        name:"example",
        phone:"010-0000-0000",
        })
        .then(response => console.log(response)) 
    }

    const putResult = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id:"9",
            username:"ex1",
            name:"James",
            phone:"010-0001-0000"
        })
        .then(response => console.log(response))
    }

    const deleteResult = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
            method:'DELETE',
        });
    }
    
    return (
        <div>
            <h3>Axios - GET 요청</h3>
            <button onClick={getResult}>GET</button>
            <h3>Axios - POST 요청</h3>
            <button onClick={postResult}>POST</button>
            <h3>Axios - PUT 요청(이상함)</h3>
            <button onClick={putResult}>PUT</button>
            <h3>Axios - DELETE 요청(이상함)</h3>
            <button onClick={deleteResult}>DELETE</button>
        </div>
    )
} 

export default AxiosTest;