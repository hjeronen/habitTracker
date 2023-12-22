import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'

const App = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <div>
      <h1>HabitTracker</h1>
      <Home activities={activities} />
    </div>
  )
}

export default App