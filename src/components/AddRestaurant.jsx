import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder' //api
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
    
    const {addRestaurant} = useContext(RestaurantsContext);
    const [uName, setName] = useState("");
    const [uLocation, setLocation] = useState("");
    const [uPriceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try 
        {
            const response = await RestaurantFinder.post("/", {
                name: uName,
                location: uLocation,
                price_range: uPriceRange
            });
            addRestaurant(response.data.data.restaurant)
        } 
        catch (err) 
        {
            
        }
    }


    return (
        <div  className="mb-3 mt-5">
            <hr style={{height: '2px'}}></hr>
            <form action="">

                <div className="form row col-12 justify-content-center">

                    <div className="col-4">
                        <input required value={uName} onChange={(e)=>setName(e.target.value)}
                         type="text" className="form-control" placeholder="name"/>
                    </div>

                    <div className="col-4">
                        <input required value={uLocation} onChange={(e)=>setLocation(e.target.value)}
                         type="text" className="form-control" placeholder="location"/>
                    </div>

                    <div className="col-2">
                        <select required value={uPriceRange} onChange={(e)=>setPriceRange(e.target.value)}
                         className="custom-select mr-sm-2 col-12 h-100">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>

                    
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add</button>
                    

                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
