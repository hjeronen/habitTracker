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
      <div>
        {activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
      </div>
    </div>
  )
}

export default App