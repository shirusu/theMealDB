import React from 'react';
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className="row mt-5">
            {
                meals.map(item =>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <Link to={`/meal/${item.idMeal}`}>
                            <img src={item.strMealThumb} alt={item.strMeal}/>
                            <h6>{item.strMeal}</h6>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default MealsList;