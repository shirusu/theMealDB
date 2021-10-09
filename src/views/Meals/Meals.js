import React, {useState, useEffect} from 'react';
import axios from "axios"
import Spinner from "../Spinner/Spinner";
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => {
                setMeals(data.meals)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Spinner/>
    return (
        <MealsList meals={meals}/>
    );
};

export default Meals;