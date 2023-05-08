import { useFoodContext } from '../hooks/useFoodContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const FoodDetails = ({ food }) => {
    const { dispatch } = useFoodContext()

    const handleClick = async () => {
        const response = await fetch('/api/food/' + food._id, {
            method: 'DELETE'
        }) 
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_FOOD', payload: json })
        }
    }
    return (
        <div className="food-details">
            <h4><strong>{food.title}</strong></h4>
            <p><strong>Calories: </strong>{food.calories}</p>
            <p><strong>Protein: </strong>{food.protein}g</p>
            <p><strong>Carbs: </strong>{food.carbs}g</p>
            <p><strong>Fat: </strong>{food.fat}g</p>
            <p>{formatDistanceToNow(new Date(food.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default FoodDetails