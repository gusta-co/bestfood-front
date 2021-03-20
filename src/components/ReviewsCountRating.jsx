import React from "react"

const ReviewsCountRating = ({count}) => 
{
    const text = [];

    if(count >= 1)
    {
        text.push(<p>({count})</p>)
    }
    else
    {
        text.push(<p>0 Reviews</p>);
    }

    return(
    <> {text}</>);
}

export default ReviewsCountRating