import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios"
import Spinner from "../Spinner/Spinner";
import Youtube from "../../components/Youtube/Youtube";
import IngredientsList from "../../components/IngredientsList/IngredientsList";

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [youtube, setYoutube] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(async () => {
        const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        const ingredientsList = Array(20).fill(0).reduce((acc, item, idx) => {
            if (meals[0][`strIngredient${idx + 1}`]) {
                return [...acc, meals[0][`strIngredient${idx + 1}`]]
            }
            return acc
        }, [])
        const youtubeCode = meals[0].strYoutube.slice(meals[0].strYoutube.indexOf("v=") + 2, meals[0].strYoutube.length)
        setIngredients(ingredientsList)
        setMeal(meals[0])
        setYoutube(youtubeCode)
        setIsLoading(false)
    }, [params.id])

    if (isLoading) return <Spinner/>

    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-6 ">
                    <h4 className="meal-title">{meal.strMeal}</h4>
                    <img src={meal.strMealThumb} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className="meal-title">Ingredients:</h4>
                    <div className="row">
                        <IngredientsList ingredients={ingredients}/>
                    </div>
                </div>
            </div>
            <div className="instructions">
                <h3 className="instruction-title">Instructions:</h3>
                <p className="instruction-desc">{meal.strInstructions}</p>
            </div>
            <Youtube youtube={youtube}/>
        </div>
    );
};

export default MealDetails;