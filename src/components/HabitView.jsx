import { Button, Col, Container, Row } from 'react-bootstrap'
import LineChartComponent from './LineChartComponent'

const HabitView = ({ habit, setView }) => {

  const getCumulativeArray = (dataPoints) => {
    let cumulativeArray = []
    dataPoints.reduce((item, sum) => {
      const result = item + sum
      cumulativeArray.push(result)
      return result
    }, 0)
    return cumulativeArray
  }

  const getCumulativeProgress = () => {
    const data = {
      labels: getDates(habit.dataValues[0]),
      datasets: []
    }

    habit.dataValues.forEach(value => {
      const dataset = {
        label: value.type,
        values: getCumulativeArray(value.dataPoints.map(data => parseInt(data.value)))
      }
      data.datasets.push(dataset)
    })

    return data
  }

  const getDates = (dataValue) => dataValue.dataPoints.map(data => getFormattedDate(data.date))

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0') // Ensures the day is two digits
    const month = String(date.getMonth() + 1).padStart(2, '0') // Adds 1 because months are 0-indexed
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const getAllDataPoints = () => {
    const data = {
      labels: getDates(habit.dataValues[0]),
      datasets: []
    }

    habit.dataValues.forEach(value => {
      const dataset = {
        label: value.type,
        values: value.dataPoints.map(data => parseInt(data.value))
      }
      data.datasets.push(dataset)
    })

    return data
  }

  return (
    <Container className='content-container'>
      <Container className='button-container'>
        <Button onClick={() => setView('home')}>Home</Button>
      </Container>
      <Container>
        <Row>
          <h1 className='habitview-header'>{habit.name}</h1>
        </Row>
        <Container className='habitview-button-bar'>
          <Row>
            <Col sm='6' style={{ display: 'flex', justifyContent: 'right', paddingRight: '10px' }}>
              <Button>Modify settings</Button>
            </Col>
            <Col sm='3'>
              <Button onClick={() => setView('datapoints')}>See data points</Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <h5 className='habitview-subheader'>Today's progress</h5>
        <h5 className='habitview-subheader'>Current progress</h5>
        <LineChartComponent data={getCumulativeProgress()} />
        <h5 className='habitview-subheader'>Daily progress</h5>
        <LineChartComponent data={getAllDataPoints()} />
      </Container>
      <Container className='button-container'>
        <Button>Add new graph</Button>
      </Container>
    </Container>
  )
}

export default HabitView