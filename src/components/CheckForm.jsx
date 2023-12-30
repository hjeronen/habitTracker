import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { getFormattedDate } from '../utils/utils'

const CheckForm = ({ habit, updateHabit }) => {

  const markAsDone = (event) => {
    event.preventDefault()

    const date = new Date()
    const newDataPoints = { dataPoints: habit.default.dataPoints.concat(date) }

    updateHabit({ ...habit, default: newDataPoints })
  }

  const getDone = () => {
    const today = getFormattedDate(new Date())
    return habit.default.dataPoints.find(date => getFormattedDate(date) === today)
  }

  return (
    <Form onSubmit={markAsDone}>
      <Container className='content-container'>
        <Row>
          <Col>
            {getDone()
              ? <p>Done!</p>
              : <Button type='submit'>Mark as done</Button>
            }
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default CheckForm