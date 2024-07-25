import { useState } from 'react';
function Fifth(){
    const [review,setReview]=useState('');
    const [reviewToDisplay,setDisplayReview]=useState('');
    const [reviews,setReviews]=useState([]);
    const addReview=()=>{
        console.log("Adding Review...");
        setReviews([...reviews,review]);
        // setDisplayReview(review);
        setReview('');
    };
    const inputValueChange=(event)=>{
        console.log("Input Changed");
        setReview(event.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Enter the review" onChange={inputValueChange}/>
            <button className="btn btn-dark btn-sm" onClick={addReview}>Add Review</button>
            <ul>
                {reviews.map((rev, index) => (
                    <li key={index}>{rev}</li>
                ))}
            </ul>
        </div>
    );
}
export default Fifth;
