import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const DataPointForm = ({ habit, addDataToHabit }) => {
  const [dataPoints, setDataPoints] = useState(habit.dataValues.map(() => 0))

  const setADataPoint = (index, value) => {
    let newDataPoints = [...dataPoints]
    newDataPoints[index] = value
    setDataPoints(newDataPoints)
  }

  const addDataPoint = (event) => {
    event.preventDefault()

    addDataToHabit(habit, dataPoints)
    setDataPoints(habit.dataValues.map(() => 0))
  }

  return (
    <Form onSubmit={addDataPoint}>
      <Container style={{ paddingTop: '40px' }}>
        {habit.dataValues.map((data, i) =>
          <Row key={i}>
            <Col sm='4'>
              <p className='text-p'>{data.type}:</p>
            </Col>
            <Col sm='4'>
              <input
                type='number'
                value={dataPoints[i]}
                name='Type'
                id='type'
                onChange={({ target }) => setADataPoint(i, target.value)}
              />
            </Col>
            <Col sm='2'>
              <p className='text-p-left'>{data.unit}</p>
            </Col>
          </Row>
        )}
      </Container>
      <Container className='button-container'>
        <Col className='next-button'>
          <Button type='submit'>Submit</Button>
        </Col>
      </Container>
    </Form>
  )
}

export default DataPointForm