import React from 'react'; //imr
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage"
import RestaurantDetailPage from "./routes/RestaurantDetailPage"
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App  = () => 
{
    return <div className="m-5">
            <RestaurantsContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/restaurants/:id/updatepage" component={UpdatePage}/>
                        <Route exact path="/restaurants/:id" component={RestaurantDetailPage}/>
                    </Switch>
                </Router>
            </RestaurantsContextProvider>

        </div> 
}
export default App;