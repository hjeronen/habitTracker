const Home = ({ activities }) => {
  return (
    <div>
      {activities.length === 0
        ? <div>No tracked activities yet.</div>
        : activities.map(activity =>
          <li key={activity.id}>{activity.name}</li>)
      }
    </div>
  )
}

export default Home