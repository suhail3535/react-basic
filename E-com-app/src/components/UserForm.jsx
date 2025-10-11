import React, { useEffect, useState } from 'react'
import './UserForm.css'
import axios from 'axios'
const UserForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [reload, setReload] = useState(false)

  const postData = async (userData) => {
    try {
      let res = await axios.post("https://json-server-deployment-itrq.onrender.com/users", userData);
      console.log("Response:", res.data);

    } catch (error) {
      console.log("Error:", error);
    }

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, age };
    postData(userData);
    alert("Form submitted successfully!");
    setReload(!reload)

    setName("");
    setEmail("");
    setAge("");
    // You can also send this data to a server or perform other actions
  }

 

  return (
    <div className='user-form'>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <br />
        <button onClick={handleSubmit} type="submit">Submit</button>

      </form>
    </div>
  )
}

export default UserForm
