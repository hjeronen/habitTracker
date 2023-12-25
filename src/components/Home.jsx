import { Card, Container, Col, Button, Row } from 'react-bootstrap'
import Habit from './Habit'

const Home = ({ habits, deleteHabit, selectHabit }) => {
  return (
    <Card>
      {habits.length === 0
        ? <Card>No tracked activities yet.</Card>
        : habits.map(habit =>
          <Card key={habit.id} className='habit-card'>
            <Container>
              <Row>
                <Col xs={12} md={8} className='habit'>
                  <Habit habit={habit} />
                </Col>
                <Col xs={3} md={2} className='button-column'>
                  <Button onClick={() => deleteHabit(habit.id)}>Delete</Button>
                </Col>
                <Col xs={3} md={2} className='button-column'>
                  <Button onClick={() => selectHabit(habit)}>Update</Button>
                </Col>
              </Row>
            </Container>
          </Card>
        )
      }
    </Card>
  )
}

export default Home