const Home = ({ activities }) => {
  return (
    <div>
      <div>
        {activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
      </div>
    </div>
  )
}

export default Home