import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './emp.css'
const Employee = () => {
    const [employees, setEmployees] = React.useState([])

    const fetchEmployee = async () => {
        try {
            let response = await axios.get("https://json-server-deployment-itrq.onrender.com/users")
            setEmployees(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://json-server-deployment-itrq.onrender.com/users/${id}`);
            fetchEmployee()
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchEmployee()
    }, [])



    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Employees Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {employees ? employees.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    )) : <h1>No Data Found.....</h1>}
                </tbody>
            </table>
        </div>
    )
}

export default Employee
