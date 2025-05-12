import React, { useState } from 'react'

function CreateTodo(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
        <input id='title' style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder='title' onChange={function(e) {
            const value = e.target.value
            setTitle(e.target.value)
        }}/> <br />
        <input id='desc' style={{
            padding: 10,
            margin: 10
        }}  type="text" placeholder='description' onChange={function(e) {
            const value = e.target.value
            setDescription(e.target.value)
        }} /> 
        <br />
        <br />
        <button style={{
            padding: 10,
            margin: 10
        }} 
        
        onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "contentType": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json()
                alert("Added Todo")
            })
        }}

        >Add Todo</button>
    </div>
  )
}

export default CreateTodo