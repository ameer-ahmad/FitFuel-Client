import { Link } from 'react-router-dom'

const Navbar = ({ page, setPage }) => {

    const switchPage = (e) => {
        if (e.target.checked) {
            setPage('food')
        } else {
            setPage('workout')
        }
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>FitFuel</h1>
                </Link>

                <div className="toggle">
                    <span className='material-symbols-outlined icon' style={{backgroundColor: page === "workout" ? '#2196F3' : '#f1f1f1', color:  page === "workout" ? 'white' : '#333'}}>fitness_center</span>
                    <label className="switch">
                        <input type="checkbox" onClick={switchPage} />
                        <span className="slider round"></span>
                    </label>
                    <span className='material-symbols-outlined icon' style={{backgroundColor: page === "food" ? '#2196F3' : '#f1f1f1', color:  page === "food" ? 'white' : '#333'}}>restaurant</span>
                </div>
            </div>
        </header>
    )
}

export default Navbar