import { Button, Card, Container, Table } from 'react-bootstrap'

const DataPoints = ({ habit, setView, updateHabit }) => {

  const deleteEntry = (dataValue, dataPoint) => {
    const newHabit = { ...habit }
    newHabit.dataValues[dataValue].dataPoints.splice(dataPoint, 1)
    updateHabit(newHabit)
  }

  const deleteDefaultDataPoint = (index) => {
    const newHabit = { ...habit }
    newHabit.default.dataPoints.splice(index, 1)
    updateHabit(newHabit)
  }

  const renderDataPoints = () => {
    if (habit.dataValues.length > 0) {
      return (
        habit.dataValues.map((dataValue, i) =>
          <Card key={i}>
            <Card.Header>
              {dataValue.type}
            </Card.Header>
            <Table striped>
              <tbody>
                {dataValue.dataPoints.map((dataPoint, j) =>
                  <tr key={j}>
                    <td>
                      {dataPoint.date}
                    </td>
                    <td>
                      {dataPoint.value} {dataValue.unit}
                    </td>
                    <td>
                      <Button variant='danger' onClick={() => deleteEntry(i, j)}>Delete entry</Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card>
        )
      )
    } else {
      return (
        <Card>
          <Table striped>
            <tbody>
              {habit.default.dataPoints.map((dataPoint, i) =>
                <tr key={i}>
                  <td>
                    {dataPoint}
                  </td>
                  <td>
                    <Button onClick={() => deleteDefaultDataPoint(i)}>Delete entry</Button>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
      )
    }
  }

  return (
    <Container className='content-container'>
      <Container className='button-container'>
        <Button onClick={() => setView('habit')}>Back</Button>
      </Container>
      {renderDataPoints()}
    </Container>
  )
}

export default DataPoints