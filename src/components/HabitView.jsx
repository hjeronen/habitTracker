import { useState } from 'react'
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap'
import LineChartComponent from './LineChartComponent'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { getFormattedDate } from '../utils/utils'

const HabitView = ({ habit, setView, deleteHabit }) => {

  const [dataValue, setDataValue] = useState(
    habit.dataValues.length > 0
      ? habit.dataValues[0]
      : null
  )

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
                  <p className='progressbar-text'>{progress}/{value.goal} {value.unit}</p>
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

  const getIfDoneToday = () => {
    const today = getFormattedDate(new Date)
    return habit.default.dataPoints.find(date => getFormattedDate(date) === today)
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
      {habit.dataValues.length > 0
        ? <Container className='content-container'>
          <Container>
            <h5 className='habitview-subheader'>Today's progress</h5>
            {renderProgressBars()}
          </Container>
          <Container className='content-container'>
            <Container className='pagination-container'>
              <Row>
                <Col>
                  <h4 className='habitview-subheader'>Show graph data for:</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Pagination className='pagination-selections'>
                    {habit.dataValues.map((data, i) =>
                      <Pagination.Item
                        key={i}
                        active={data === dataValue}
                        onClick={() => setDataValue(habit.dataValues[i])}>
                        {data.type}
                      </Pagination.Item>
                    )}
                  </Pagination>
                </Col>
              </Row>
            </Container>
            <h5 className='habitview-subheader'>Current progress</h5>
            <LineChartComponent
              data={getCumulativeProgressFromData(dataValue)} />
          </Container>
          <h5 className='habitview-subheader'>Daily progress</h5>
          <Container className='content-container'>
            <LineChartComponent
              data={getAllDataPointsFromDaily(dataValue)} />
          </Container>
        </Container>
        : <Container className='content-container'>
          <Container className='pagination-container'>
            <Row>
              <Col>
                <h4 className='habitview-subheader'>Todays progress:</h4>
                <p>{getIfDoneToday() ? 'Done!' : 'Not done yet'}</p>
              </Col>
            </Row>
          </Container>
        </Container>
      }
      <Container className='button-container'>
        <Button>Add new graph</Button>
      </Container>
    </Container >
  )
}

export default HabitView