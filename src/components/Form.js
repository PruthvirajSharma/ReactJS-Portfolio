import "./FormStyles.css"
import React from 'react'

export const Form = () => {
  return (
    <div className="form">
        <br/>
        <h1 style={{textAlign:"center"}}>CONTACT US</h1>
        <form>
            <label>Enter Name</label>
            <input type="text"></input>
            <label>Enter Email</label>
            <input type="email"></input>
            <label>Enter Subject</label>
            <input type="text"></input>
            <label>Enter Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}
