import Home from './components/Home'

const App = () => {
  const activities = [
    {
      id: 1,
      name: 'Reading'
    }
  ]

  return (
    <div>
      <h1>HabitTracker</h1>
      <Home activities={activities} />
    </div>
  )
}

export default App