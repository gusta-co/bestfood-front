import React from 'react'

const StarRating = ({rating}) => {
    
    
    const stars = []
    
    var i;

    if(rating <= 0 || rating == null)
    {
        stars.push(<i></i>)
    }
    else
    {
        for(i = 1; i <= 5 ; i++)
        {
            if(i <= rating)
            {
                stars.push(<i class="fas fa-star text-warning"></i>)
            }
            else if(i === Math.ceil(rating) && !Number.isInteger(rating))
            {
                stars.push(<i class="fas fa-star-half-alt text-warning"></i>)
            }
            else
            {
                stars.push(<i class="far fa-star text-secondary"></i>)
            }
        }
    }

   

    return (
        <>{stars}
        </>
    )
}

export default StarRating
