import Habit from './Habit'

const Home = ({ habits, deleteHabit, selectHabit }) => {
  return (
    <div>
      {habits.length === 0
        ? <div>No tracked activities yet.</div>
        : habits.map(habit =>
          <div key={habit.id}>
            <Habit habit={habit} />
            <button onClick={() => deleteHabit(habit.id)}>Delete</button>
            <button onClick={() => selectHabit(habit)}>Update</button>
          </div>
        )
      }
    </div>
  )
}

export default Home