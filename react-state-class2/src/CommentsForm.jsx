import { useState } from "react"

export default function CommentsForm({addNewComment}){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputeChange =(event) => {
        setFormData((currData) => { 
            return {...currData,[event.target.name] : event.target.value}
        });
    }

    let handleSubmit = (event) =>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                &nbsp;
                <input placeholder="username" 
                type="text" 
                value={formData.username}
                onChange={handleInputeChange}
                id="username"
                name="username"
                />
                <br></br><br></br>

                <label htmlFor="remark">Remarks</label>
                &nbsp;
                <textarea value={formData.remarks}
                  placeholder="add a remarks"
                  onChange={handleInputeChange}
                  id="remark"
                  name="remarks">Remarks</textarea>
                <br></br>

                <label htmlFor="rating">Rating</label>
                &nbsp;
                <input placeholder="rating" 
                type="number" 
                min={1} max={5}
                value={formData.rating}
                onChange={handleInputeChange}
                id="rating"
                name="rating"
                />

                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}