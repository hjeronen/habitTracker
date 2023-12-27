import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const PhaseOne = ({ name, setName, setPhase }) => {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>
            1. Set name for habit
          </Card.Title>
        </Card.Header>
        <Container className='content-container'>
          Name:
          <input
            type='text'
            value={name}
            name='Name'
            id='name'
            onChange={({ target }) => setName(target.value)}
          />
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