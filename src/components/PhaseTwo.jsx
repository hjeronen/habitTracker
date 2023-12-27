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
    <Container className='content-container'>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>
                2. Set tracked data values
              </Card.Title>
            </Card.Header>
            <Container className='content-container'>
              <Row>
                <Col sm='2' className='form-col'>
                  <p className='text-p'>Type:</p>
                </Col>
                <Col sm='7' className='form-col'>
                  <input
                    type='text'
                    value={type}
                    name='Type'
                    id='type'
                    onChange={({ target }) => setType(target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm='2' className='form-col'>
                  <p className='text-p'>Unit:</p>
                </Col>
                <Col sm='7' className='form-col'>
                  <input
                    type='text'
                    value={unit}
                    name='Unit'
                    id='unit'
                    onChange={({ target }) => setUnit(target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='12' className='next-button'>
                  <Button onClick={() => addData()} >Add</Button>
                </Col>
              </Row>
            </Container>
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
          </Card>
          <Container className='button-container'>
            <Row>
              <Col className='back-button'>
                <Button onClick={() => setPhase('one')}>Back</Button>
              </Col>
              <Col className='next-button'>
                <Button onClick={() => setPhase('three')}>Next</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default PhaseTwo