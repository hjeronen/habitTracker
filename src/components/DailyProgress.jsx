import { Col, Container, Row } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { getFormattedDate } from '../utils/utils'

const DailyProgress = ({ habit }) => {

  const getTodaysProgressInDataValue = (dataValue) => {
    const today = getFormattedDate(new Date())
    const current = dataValue.dataPoints
      .map(dataPoint => getFormattedDate(dataPoint.date) === today
        ? parseInt(dataPoint.value)
        : 0)
      .reduce((value, sum) => value + sum, 0)
    return current
  }

  const getTodaysPercentage = (current, goal) => Math.floor((current / goal) * 100)

  const getTodaysProgressInAllDataValues = () => {
    const valuesWithGoals = habit.dataValues.filter(value => value.goal ? true : false)
    const allPercentages = valuesWithGoals.map(value => {
      if (value.goal) {
        const progress = getTodaysProgressInDataValue(value)
        return getTodaysPercentage(progress, parseInt(value.goal))
      }
    })
    const average = allPercentages.reduce((value, sum) => value + sum, 0) / allPercentages.length
    return Math.floor(average)
  }

  const getIfDoneToday = () => {
    const today = getFormattedDate(new Date)
    if (habit.default.dataPoints.find(date => getFormattedDate(date) === today)) {
      return 100
    }
    return 0
  }

  const todaysProgress = habit.dataValues.length > 0
    ? getTodaysProgressInAllDataValues()
    : getIfDoneToday()

  return (
    <Container className='progressbar-container'>
      <Row>
        <Col>
          <CircularProgressbar value={todaysProgress} text={`${todaysProgress}%`} />
        </Col>
      </Row>
    </Container>
  )
}

export default DailyProgress