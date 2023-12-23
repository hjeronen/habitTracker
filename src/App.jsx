import { useState, useEffect } from 'react'
import habitService from './services/habits'
import Home from './components/Home'
import HabitForm from './components/HabitForm'

const App = () => {
  const [habits, setHabits] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    habitService
      .getAll()
      .then(habits => {
        setHabits(habits)
      })
  }, [])

  const generateID = () => Math.floor(Math.random() * 10000)

  const createNew = async (newHabit) => {
    newHabit.id = generateID()
    try {
      const createdHabit = await habitService.addHabit(newHabit)
      setHabits(habits.concat(createdHabit))
      return true
    } catch (exception) {
      console.log(exception)
      return false
    }
  }

  const updateHabit = async (updatedHabit) => {
    try {
      const returnedHabit = await habitService.updateHabit(updatedHabit)
      setHabits(
        habits
          .filter(h => h.id !== returnedHabit.id)
          .concat(returnedHabit)
      )
      setSelected(null)
    } catch (exception) {
      console.log(exception)
      setSelected(null)
    }
  }

  const deleteHabit = async (id) => {
    try {
      habitService.deleteHabit(id)
      setHabits(habits.filter(h => h.id !== id))
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div>
      <h1>HabitTracker</h1>
      <Home habits={habits} deleteHabit={deleteHabit} selectHabit={setSelected} />
      <HabitForm habit={selected} createNew={createNew} updateHabit={updateHabit} />
    </div>
  )
}

export default App