import { useState } from "react";
function FormExample() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is: ${name}`);
        console.log(name);
    }

    return (
        <form>
            <input style={{ width: "300px" }}
                type="text"
                value={name}
                // onChange={(e) => setName(e.target.value)}
                onChange={handleChange}
            />
            <h1>Your Name: {name}</h1>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}
export default FormExample;