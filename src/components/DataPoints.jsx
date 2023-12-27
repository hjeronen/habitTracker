import { Button, Card, Container, Table } from 'react-bootstrap'

const DataPoints = ({ habit, setView, updateHabit }) => {

  const deleteEntry = (dataValue, dataPoint) => {
    const newHabit = {...habit}
    newHabit.dataValues[dataValue].dataPoints.splice(dataPoint, 1)
    updateHabit(newHabit)
  }

  return (
    <Container className='content-container'>
      <Container className='button-container'>
        <Button onClick={() => setView('habit')}>Back</Button>
      </Container>
      {habit.dataValues.map((dataValue, i) =>
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
                  {dataPoint.value}
                </td>
                <td>
                  <Button onClick={() => deleteEntry(i, j)}>Delete entry</Button>
                </td>
              </tr>
            )}
            </tbody>
          </Table>
        </Card>
      )}
    </Container>
  )
}

export default DataPoints