import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import MealsList from "../../components/MealsList/MealsList";

const Ingredients = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {name} = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(res => {
                setMeals(res.data.meals)
                setIsLoading(false)
            })
    }, [name])
    if (isLoading) return <Spinner/>

    return (
        <div className="row mt-5">
            <div className="col-md-6 mb-3">
                <h4 className="meal-title">{name}</h4>
                <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
            </div>
            <div className="col-md-6 mb-3">
               <MealsList meals={meals}/>
            </div>

        </div>
    );
};

export default Ingredients;