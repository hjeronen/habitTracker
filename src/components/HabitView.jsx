import { Button, Col, Container, Row } from 'react-bootstrap'
import LineChartComponent from './LineChartComponent'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { getFormattedDate } from '../utils/utils'

const HabitView = ({ habit, setView, deleteHabit }) => {

  const getTodaysProgress = (dataValue) => {
    const today = getFormattedDate(new Date())
    const current = dataValue.dataPoints
      .map(dataPoint => getFormattedDate(dataPoint.date) === today
        ? parseInt(dataPoint.value)
        : 0)
      .reduce((value, sum) => value + sum, 0)
    return current
  }

  const getTodaysPercentage = (current, goal) => Math.floor((current / goal) * 100)

  const renderProgressBars = () => {
    return (
      <Container className='progressbar-container'>
        <Row className='justify-content-md-center'>
          {habit.dataValues.map((value, i) => {
            if (value.goal) {
              const progress = getTodaysProgress(value)
              const percentage = getTodaysPercentage(progress, parseInt(value.goal))
              return (
                <Col key={i} style={{ width: 150, height: 150 }}>
                  <CircularProgressbar value={percentage} text={`${percentage}%`} />
                  <p className='progressbar-text'>{value.type}</p>
                  <p className='progressbar-text'>{progress} {value.unit}</p>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    )
  }

  const getDailyProgress = (dataValue) => {
    const dailyProgress = {}
    dataValue.dataPoints.forEach(dataPoint =>
      dailyProgress[getFormattedDate(dataPoint.date)]
        ? dailyProgress[getFormattedDate(dataPoint.date)] += parseInt(dataPoint.value)
        : dailyProgress[getFormattedDate(dataPoint.date)] = parseInt(dataPoint.value)
    )
    return dailyProgress
  }

  const getCumulativeProgressFromDaily = (dailyProgress) => {
    const values = Object.values(dailyProgress)
    const cumulativeArray = []
    values.reduce((value, sum) => {
      const result = value + sum
      cumulativeArray.push(result)
      return result
    }, 0)
    return cumulativeArray
  }

  const getCumulativeProgressFromData = (dataValue) => {
    const dailyProgress = getDailyProgress(dataValue)
    const data = {
      labels: Object.keys(dailyProgress),
      datasets: [
        {
          label: dataValue.type,
          values: getCumulativeProgressFromDaily(dailyProgress)
        }
      ]
    }

    return data
  }

  const getAllDataPointsFromDaily = (dataValue) => {
    const dailyProgress = getDailyProgress(dataValue)
    const data = {
      labels: Object.keys(dailyProgress),
      datasets: [
        {
          label: dataValue.type,
          values: Object.values(dailyProgress)
        }
      ]
    }

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
            <Col className='habitview-button-col'>
              <Button
                className='habitview-button'
                variant='outline-primary' >
                Modify settings
              </Button>
            </Col>
            <Col className='habitview-button-col'>
              <Button
                className='habitview-button'
                variant='outline-primary'
                onClick={() => setView('datapoints')}>
                See data points
              </Button>
            </Col>
            <Col className='habitview-button-col'>
              <Button
                className='habitview-button'
                variant='outline-danger'
                onClick={() => deleteHabit(habit.id)}>
                Delete habit
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className='content-container'>
        <h5 className='habitview-subheader'>Today's progress</h5>
        {renderProgressBars()}
        <h5 className='habitview-subheader'>Current progress</h5>
        <Container className='content-container'>
          {habit.dataValues.map((dataValue, i) =>
            <LineChartComponent
              key={i}
              data={getCumulativeProgressFromData(dataValue)} />
          )}
        </Container>
        <h5 className='habitview-subheader'>Daily progress</h5>
        <Container className='content-container'>
          {habit.dataValues.map((dataValue, i) =>
            <LineChartComponent
              key={i}
              data={getAllDataPointsFromDaily(dataValue)} />
          )}
        </Container>
      </Container>
      <Container className='button-container'>
        <Button>Add new graph</Button>
      </Container>
    </Container>
  )
}

export default HabitView