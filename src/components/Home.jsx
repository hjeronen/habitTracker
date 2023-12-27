import { Card, Container, Col, Button, Row } from 'react-bootstrap'
import Habit from './Habit'

const Home = ({ habits, deleteHabit, selectHabit, setView }) => {

  const showHabit = (habit) => {
    selectHabit(habit)
    setView('habit')
  }

  return (
    <Container className='content-container'>
      <Card>
        {habits.length === 0
          ? <Card>No tracked activities yet.</Card>
          : habits.map(habit =>
            <Card key={habit.id} className='habit-card'>
              <Container>
                <Row>
                  <Col xs={12} md={8} className='habit' onClick={() => showHabit(habit)}>
                    <Habit habit={habit} />
                  </Col>
                  <Col xs={3} md={2} className='button-column'>
                    <Button onClick={() => deleteHabit(habit.id)}>Delete</Button>
                  </Col>
                </Row>
              </Container>
            </Card>
          )
        }
      </Card>
      <Container className='button-container'>
        <Row>
          <Col className='next-button'>
            <Button onClick={() => setView('form')}>Add new</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home