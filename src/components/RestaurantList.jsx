import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '..//apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';
import {useHistory} from "react-router-dom";
import StarRating from './StarRating';
import ReviewsCountRating from './ReviewsCountRating';


const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext) //from ..context/ResturantsContext line 3

    let history = useHistory(); //href to others page

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants); //setRestaurants updates the list
            }

            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);


    const handleRestaurantSelect = (id) => 
    {
        history.push(`/restaurants/${id}`);
    }


    const handleUpdate = (id) =>
    {
        history.push(`/restaurants/${id}/updatepage`)
    }

    const handleDelete = async (id) => {
        try 
        {
           const response = await RestaurantFinder.delete(`/${id}`);
           setRestaurants(restaurants.filter (restaurant => {
                return restaurant.id !== id; //avoid deleting wrong restaurant
           }));
        } 
        catch (err) 
        {
            
        }
    }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary text-center">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                   {restaurants && restaurants.map(restaurant => {
                       return(
                        
                           <tr key={restaurant.id}>
                               <td className="restaurant-selecting" onClick={() => handleRestaurantSelect(restaurant.id)}>{restaurant.name}</td>
                               <td>{restaurant.location}</td>
                               <td>{"$".repeat(restaurant.price_range)}</td>
                               <td > <StarRating rating={restaurant.average_rating}  /> <ReviewsCountRating count={restaurant.count}></ReviewsCountRating></td>
                               <td><button onClick={() => handleUpdate(restaurant.id)} className="btn btn-warning">Update</button></td>
                               <td><button onClick={() => handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td>
                           </tr>
                       )
                   })}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
