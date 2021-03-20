import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';


const UpdateRestaurant = () => {
    
    let history = useHistory();

    const { id } = useParams();
    

    const {restaurants} = useContext(RestaurantsContext);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");


    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`);
            setName(response.data.data.restaurants.name);
            setLocation(response.data.data.restaurants.location);
            setPriceRange(response.data.data.restaurants.price_range);
        }

        fetchData();
    }, []);



    const handleUpdateSubmit = async (e) => 
    {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name: name,
            location: location,
            price_range: priceRange
        });
        history.push("/");    
    }



    const handleCancel = () => 
    {
        history.push("/");
    }

    return (
        <div className="col-12 mt-4">
            <h2 className="text-center">Update Restaurant</h2>

            <h1></h1>
          
            <form action="" className="col-7 mt-5">

            <div className="form-group mt-3">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name"/>
            </div>

            <div className="form-group  mt-3">
                <label htmlFor="location">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" id="location"/>
            </div>

            <div className="form-group  mt-3">
                <label htmlFor="price_range">Price Range</label>
                <input value={priceRange} onChange={(e) => setPriceRange(e.target.value)} type="number" className="form-control" id="price_range" min="1" max="5"/>
            </div>

           
           <div className="mt-3">
                <button type="submit" onClick={handleUpdateSubmit} className="btn btn-success col-2">Update</button>
                <button onClick={() => handleCancel()} className="btn btn-danger col-2 mx-2">Cancel</button>
            </div>
            

            </form>

        </div>
    )
}

export default UpdateRestaurant
