import React from 'react';
import './index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Meals from "./views/Meals/Meals";
import MealDetails from "./views/MealDetails/MealDetails";
import Ingredients from "./views/Ingredients/Ingredients";
import Browse from "./views/Browse/Browse";



const App = () => {
    return (
        <Router>
            <Header/>
            <Route exact path="/"><Home/></Route>
            <div className="container">
                <Route path="/meals"><Meals/></Route>
                <Route path="/meal/:id"><MealDetails/></Route>
                <Route path="/ingredients/:name"><Ingredients/></Route>
                <Route path="/browse/:name"><Browse/></Route>
            </div>

        </Router>
    );
};

export default App;