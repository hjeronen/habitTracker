import { useState } from 'react'
import { Button, Card, Container, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { InfoCircle } from 'react-bootstrap-icons'

const PhaseTwo = ({ dataValues, setDataValues, setPhase }) => {
  const [type, setType] = useState('')
  const [unit, setUnit] = useState('')

  const addData = () => {
    const data = {
      type, unit, dataPoints: []
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
                <Container className='card-title-container'>
                  <Row>
                    <Col>
                      2. Set tracked data values
                    </Col>
                    <Col className='text-p'>
                      <OverlayTrigger
                        placement='right'
                        overlay={<Tooltip>Add data values to track</Tooltip>}>
                        <InfoCircle />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </Container>
              </Card.Title>
            </Card.Header>
            <Container className='content-container'>
              <Row className='align-items-center'>
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
                <Col>
                  <OverlayTrigger
                    placement='right'
                    overlay={<Tooltip>
                      Define type of the data value (e.g. Distance).
                    </Tooltip>}>
                    <InfoCircle />
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row className='align-items-center'>
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
                <Col>
                  <OverlayTrigger
                    placement='right'
                    overlay={<Tooltip>
                      Define unit for the data value (e.g. meters).
                    </Tooltip>}>
                    <InfoCircle />
                  </OverlayTrigger>
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
                    <Row className='align-items-center'>
                      <Col md={9} style={{ paddingLeft: '20px' }}>
                        {data.type} {'(' + data.unit + ')'}
                      </Col>
                      <Col md={2} className='button-column'>
                        <Button
                          variant='outline-danger'
                          onClick={() => deleteData(i)}>
                          Delete
                        </Button>
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