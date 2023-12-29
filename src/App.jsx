import { useState, useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import habitService from './services/habits'
import Home from './components/Home'
import HabitForm from './components/HabitForm'
import HabitView from './components/HabitView'
import DataPoints from './components/DataPoints'
import './styles.css'

const App = () => {
  const [habits, setHabits] = useState([])
  const [selected, setSelected] = useState(null)
  const [view, setView] = useState('home')

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
      setView('home')
    } catch (exception) {
      console.log(exception)
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
      selected.id === returnedHabit.id
        ? setSelected(returnedHabit)
        : setSelected(null)
    } catch (exception) {
      console.log(exception)
    }
  }

  const deleteHabit = async (id) => {
    try {
      habitService.deleteHabit(id)
      setHabits(habits.filter(h => h.id !== id))
      setSelected(null)
      setView('home')
    } catch (exception) {
      console.log(exception)
    }
  }

  const renderView = () => {
    switch (view) {
      case 'form':
        return <HabitForm
          createNew={createNew}
          setView={setView} />
      case 'habit':
        return <HabitView
          habit={selected}
          setView={setView}
          deleteHabit={deleteHabit} />
      case 'datapoints':
        return <DataPoints
          habit={selected}
          setView={setView}
          updateHabit={updateHabit} />
      default:
        return <Home
          habits={habits}
          deleteHabit={deleteHabit}
          selectHabit={setSelected}
          updateHabit={updateHabit}
          setView={setView} />
    }
  }

  return (
    <div>
      <Navbar bg='dark'>
        <Container>
          <Navbar.Brand className='headline-container'>HabitTracker</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        {renderView()}
      </Container>
    </div>
  )
}

export default App