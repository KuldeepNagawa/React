import { useState } from "react"

export default function Form (){
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
           return {...currData,[event.target.name]: event.target.value };
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
        fullName: "",
        userName: "",
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input placeholder="enter full name" 
            type="text" 
            value={formData.fullName} 
            id="fullname"
            name="fullName"
            onChange={handleInputChange}
            />
            <br></br>
             <label htmlFor="username">User Name</label>
            <input placeholder="enter full name" 
            type="text" 
            value={formData.userName} 
            id="username"
            name="userName"
            onChange={handleInputChange}
            />
            <br></br>
            <button>Submit</button>
        </form>
    )
}