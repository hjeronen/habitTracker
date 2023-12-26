import { useState } from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'

const PhaseTwo = ({ dataValues, setDataValues, setPhase }) => {
  const [type, setType] = useState('')
  const [unit, setUnit] = useState('')

  const addData = () => {
    const data = {
      type, unit, value: 0
    }

    setDataValues(dataValues.concat(data))
    setType('')
    setUnit('')
  }

  const deleteData = (index) => {
    let values = [...dataValues]
    values.splice(index, 1)
    setDataValues(values)
  }

  return (
    <div>
      <h2>2. Set tracked data values</h2>
      <div>
        Type:
        <input
          type='text'
          value={type}
          name='Type'
          id='type'
          onChange={({ target }) => setType(target.value)}
        />
      </div>
      <div>
        <div>
          Unit:
          <input
            type='text'
            value={unit}
            name='Unit'
            id='unit'
            onChange={({ target }) => setUnit(target.value)}
          />
        </div>
        <Button onClick={() => addData()} >Add</Button>
      </div>
      <Card>
        {dataValues.map((data, i) =>
          <Card key={i} className='habit-card'>
            <Container>
              <Row>
                <Col xs={12} md={8} className='habit'>
                  {data.type} {data.unit}
                </Col>
                <Col xs={3} md={2} className='button-column'>
                  <Button onClick={() => deleteData(i)}>Delete</Button>
                </Col>
              </Row>
            </Container>
          </Card>
        )}
      </Card>
      <Button onClick={() => setPhase('three')}>Next</Button>
    </div>
  )
}

export default PhaseTwo