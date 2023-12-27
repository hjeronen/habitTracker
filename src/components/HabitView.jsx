import { Button, Container } from 'react-bootstrap'

const HabitView = ({ habit, setView }) => {
  return (
    <Container>
      <Container className='button-container'>
        <Button onClick={() => setView('home')}>Home</Button>
      </Container>
      <h1>{habit.name}</h1>
      <Button>Modify settings</Button>
      <br></br>
      <h3>Daily progress</h3>
      <p>Daily goals here</p>
      <h2>Other kinds of graphs here</h2>
      <Button>Add new graph</Button>
      <Button onClick={() => setView('datapoints')}>See data points</Button>
    </Container>
  )
}

export default HabitView