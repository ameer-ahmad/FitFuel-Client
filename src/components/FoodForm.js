import { useState } from 'react'
import {useFoodContext} from '../hooks/useFoodContext'


const FoodForm = () => {
    const { dispatch } = useFoodContext()
    const [title, setTitle] = useState('')
    const [calories, setCalories] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fat, setFat] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const food = { title, calories, protein, carbs, fat }

        const response = await fetch('https://fit-fuel.herokuapp.com/api/food', {
            method: 'POST',
            body: JSON.stringify(food),
            headers: { 'Content-Type': 'application/json'}
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setCalories('')
            setProtein('')
            setCarbs('')
            setFat('')
            setError(null)
            setEmptyFields([])
            dispatch({type: "CREATE_FOOD", payload: json})
            console.log('new meal added', json)
        }
    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a Meal</h3>

            <label>Meal Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Calories:</label>
            <input
                type="number"
                onChange={(e) => setCalories(e.target.value)}
                value={calories}
                className={emptyFields.includes('calories') ? 'error' : ''}
            />

            <label>Protein:</label>
            <input
                type="number"
                onChange={(e) => setProtein(e.target.value)}
                value={protein}
                className={emptyFields.includes('protein') ? 'error' : ''}
            />

            <label>Carbs:</label>
            <input
                type="number"
                onChange={(e) => setCarbs(e.target.value)}
                value={carbs}
                className={emptyFields.includes('carbs') ? 'error' : ''}
            />

            <label>Fat:</label>
            <input
                type="number"
                onChange={(e) => setFat(e.target.value)}
                value={fat}
                className={emptyFields.includes('fat') ? 'error' : ''}
            />

            <button>Add Meal</button>
            {error && <div className="error">{error}</div>}
        </form>
    )   
}

export default FoodForm