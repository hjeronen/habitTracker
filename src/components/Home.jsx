import { useState } from 'react'
import { Card, Container, Col, Button, Row } from 'react-bootstrap'
import DailyProgress from './DailyProgress'
import DataPointForm from './DataPointForm'

const Home = ({
  habits,
  selectHabit,
  updateHabit,
  setView }) => {

  const [showForm, setShowForm] = useState(habits.map(() => false))

  const showHabit = (habit) => {
    selectHabit(habit)
    setView('habit')
  }

  const addDataToHabit = (habit, dataPoints) => {
    const newHabit = { ...habit }
    for (let i = 0; i < dataPoints.length; i++) {
      if (dataPoints[i] > 0) {
        const oldDataPoints = habit.dataValues[i].dataPoints
        const newDataPoint = {
          date: new Date(),
          value: dataPoints[i]
        }
        newHabit.dataValues[i].dataPoints = oldDataPoints.concat(newDataPoint)
      }
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
          : habits
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1
              } else if (a.name > b.name) {
                return 1
              }
              return 0
            })
            .map((habit, i) =>
              <Card key={habit.id} className='habit-card'>
                <Container>
                  <Row>
                    <Col xs='7' className='habitcard-column-habit' onClick={() => showHabit(habit)}>
                      {habit.name}
                    </Col>
                    <Col xs='2'>
                      <DailyProgress habit={habit} />
                    </Col>
                    <Col xs='auto' className='habitcard-column-button'>
                      <Button
                        onClick={() => toggleDataForm(i)}>
                        {showForm[i] ? 'Hide' : 'Add data'}
                      </Button>
                    </Col>
                  </Row>
                  {showForm[i] &&
                    <DataPointForm
                      habit={habit}
                      addDataToHabit={addDataToHabit} />
                  }
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