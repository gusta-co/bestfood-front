import React, {useEffect, useContext, useState} from 'react'
import Header from '../components/Header'
import Reviews from '../components/Reviews';
import {useHistory, useParams} from "react-router-dom";


import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from '../components/StarRating';
import AddReview from '../components/AddReview';

const RestaurantDetailPage = () => {
  
    let history = useHistory();

    const { id } = useParams();

    const [name, setName] = useState("");
    const [restaurantReview, setRestaurantsReview] = useState("");

    useEffect(() => {

        const fetchData = async() =>
        {
            try 
            {
                const response = await RestaurantFinder.get(`/${id}`);
                setName(response.data.data.restaurants.name);
                setRestaurantsReview(response.data.data.reviews);
            } 
            catch (err) 
            {
                console.log(err);
            }   
        }

        fetchData();
    }, []);




    const handleBack = () =>
    {
        history.push("/");
    }

    return (
        <div>
            <Header />

            <div className="d-flex justify-content-center">
                <button onClick={() => handleBack()} className="btn btn-danger arrow-left h-50 mt-4">🡐</button>
                <h1 className="text-center mt-3 mx-5">{name} </h1>
            </div>
            <div className="d-flex justify-content-center mt-4 text-warning"> <StarRating rating={3.2}/></div>

            <div className="mt-5">
                <Reviews reviews={restaurantReview} />
                <AddReview />
            </div>

        </div>
    )
}

export default RestaurantDetailPage
