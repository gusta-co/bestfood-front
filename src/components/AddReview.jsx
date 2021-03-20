import React, { useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from './StarRating'
import { useParams, useHistory } from 'react-router-dom'

const AddReview = () => {
    
    const { id } = useParams()
    let history = useHistory();

    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");

    const handleSubmitReview = async (e) => {

        try 
        {
            const response = await RestaurantFinder.post(`/${id}`, {
                name,
                review: reviewText,
                rating
            });
            window.location.reload();
            
        } 
        catch (err) 
        {
            console.log(err);
        }

    }
    
    return (
        <div className="mt-4 border rounded p-2">
            <form action="">
                <div className="form row">

                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" style={{height: "40px"}}/>
                    </div>

                    <div className="form-group col-4 h-100">
                        <label  htmlFor="rating" className="h-100">Rating</label>
                        <select value={rating} onChange={(e) => setRating(e.target.value)} id="rating" className="custom-select col-12" style={{height: "40px"}}>
                            <option disabled>Rating</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>

                    <div className="form-group col-12 mt-4">
                        <label value={reviewText} onChange={(e) => setReviewText(e.target.value)} htmlFor="review" className="col-12">Review</label>
                        <textarea onChange={(e => setReviewText(e.target.value))} className="col-12" style={{minHeight:"75px"}}></textarea>
                    </div>

                    <div className="form-group mt-3">
                        <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">Send Review</button>
                    </div>
                        
                </div>
            </form>
        </div>
    )
}

export default AddReview
