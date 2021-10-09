import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'
import Spinner from "../Spinner/Spinner";
import MealsList from "../../components/MealsList/MealsList";

const Browse = () => {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(res => {
                if (res.data.meals) {
                    setMeals(res.data.meals)
                } else {
                    setError("Такого блюда нет")
                }
                setIsLoading(false)
            })
    }, [params.name])
    if (isLoading) return <Spinner/>
    return (
        <div>
            {
                error ? <h2>{error}</h2> :  <MealsList meals={meals}/>
            }
        </div>
    );
};

export default Browse;