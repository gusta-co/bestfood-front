import React from 'react'
import StarRating from './StarRating'

const Reviews = ({reviews}) => {
    
    var ratingSum = 0;
    var reviewsCount = 0;

    return (
        <div className="row row-cols-3 justify-content-center mb-2">


                {reviews && reviews.map(review => {
                    ratingSum += review.rating;
                    reviewsCount++;
                    return (
                        <div className="card text-white bg-primary mb-3 mx-2 col-4" style={{maxWidth: '30%'}}>
                            <div className="card-header d-flex justify-content-between">
                                <span>{review.name}</span>
                                <span > <StarRating rating={review.rating}/> </span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{review.review}</p>
                            </div>
                        </div>
                    )  
                })}


                             
            

        </div>
    )
}

export default Reviews
