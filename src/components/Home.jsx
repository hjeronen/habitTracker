import { useState } from 'react'
import { Card, Container, Col, Button, Row } from 'react-bootstrap'
import Habit from './Habit'
import DataPointForm from './DataPointForm'

const Home = ({ habits, deleteHabit, selectHabit, updateHabit, setView }) => {
  const [showForm, setShowForm] = useState(habits.map(() => false))

  const showHabit = (habit) => {
    selectHabit(habit)
    setView('habit')
  }

  const addDataToHabit = (habit, dataPoints) => {
    const newHabit = {...habit}
    for (let i = 0; i < dataPoints.length; i++) {
      const oldDataPoints = habit.dataValues[i].dataPoints
      const newDataPoint = {
        date: new Date(),
        value: dataPoints[i]
      }
      newHabit.dataValues[i].dataPoints = oldDataPoints.concat(newDataPoint)
    }
    updateHabit(newHabit)
    setShowForm(habits.map(() => false))
  }

  const toggleDataForm = (index) => {
    const toggled = [...showForm]
    toggled[index] = !showForm[index]
    setShowForm(toggled)
  }

  return (
    <Container className='content-container'>
      <Card>
        {habits.length === 0
          ? <Card>No tracked activities yet.</Card>
          : habits.map((habit, i) =>
            <Card key={habit.id} className='habit-card'>
              <Container>
                <Row>
                  <Col xs={12} md={8} className='habit' onClick={() => showHabit(habit)}>
                    <Habit habit={habit} />
                  </Col>
                  <Col xs={3} md={2} className='button-column'>
                    <Button onClick={() => deleteHabit(habit.id)}>Delete</Button>
                  </Col>
                  <Col xs={3} md={2} className='button-column'>
                    <Button onClick={() => toggleDataForm(i)}>{showForm[i] ? 'Hide' : 'Add data'}</Button>
                  </Col>
                </Row>
              </Container>
              {showForm[i] &&
                <DataPointForm habit={habit} addDataToHabit={addDataToHabit} />
              }
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