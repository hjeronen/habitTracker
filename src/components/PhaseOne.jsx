import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const PhaseOne = ({ name, setName, setPhase }) => {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>
            <Container className='card-title-container'>
              <Row>
                <Col>
                  1. Set name for habit
                </Col>
              </Row>
            </Container>
          </Card.Title>
        </Card.Header>
        <Container className='content-container'>
          <Row>
            <Col style={{ marginBottom: '10px', paddingLeft: '20px' }}>
              Name:
            </Col>
          </Row>
          <Row>
            <Col sm='11' style={{ paddingLeft: '20px' }}>
              <input
                type='text'
                value={name}
                name='Name'
                id='name'
                onChange={({ target }) => setName(target.value)}
              />
            </Col>
          </Row>
        </Container>
      </Card>
      <Container className='button-container'>
        <Row>
          <Col className='next-button'>
            <Button onClick={() => setPhase('two')}>Next</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default PhaseOne