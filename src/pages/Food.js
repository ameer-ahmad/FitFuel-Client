import { useEffect } from "react"

import FoodDetails from '../components/FoodDetails'
import FoodForm from '../components/FoodForm'
import { useFoodContext } from "../hooks/useFoodContext"

const Food = () => {
    const {food, dispatch} = useFoodContext()


    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch('/api/food')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_FOOD", payload: json})
            }
        }   
        
        fetchFood()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {food && food.map((meal) => (
                     <FoodDetails key={meal._id} food={meal} />
                ))}
            </div>
            <FoodForm />
        </div>
    )
}

export default Food