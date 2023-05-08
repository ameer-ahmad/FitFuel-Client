import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import Food from './pages/Food'
import Navbar from './components/Navbar'

function App() {

  const [page, setPage] = useState('workout')

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar page={page} setPage={setPage} />
        <div className="pages"> 
          <Routes>
            <Route
              path='/'
              element={page === "workout" ? <Home/> : <Food/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
