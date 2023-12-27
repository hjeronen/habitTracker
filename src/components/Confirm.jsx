import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Confirm = ({ name, dataValues, setPhase }) => {
  return (
    <Container className='content-container'>
      <h4 style={{ marginLeft: '20px' }}>Check habit information:</h4>
      <Card>
        <Card.Header>
          Habit name
        </Card.Header>
        {name}
      </Card>
      <Card>
        <Card.Header>
          Tracked data and targets
        </Card.Header>
        {dataValues.map((item, i) =>
          <Card key={i}>
            <Container>
              <Row>
                <p>Type: {item.type}</p>
              </Row>
              <Row>
                <p>Unit: {item.unit}</p>
              </Row>
              <Row>
                <p>Target: {item.target ? item.target : 'No total target'} {item.unit}</p>
              </Row>
              <Row>
                <p>Goal: {item.goal ? item.goal : 'No daily goal'} {item.unit}</p>
              </Row>
            </Container>
          </Card>
        )}
      </Card>
      <Container className='button-container'>
        <Row>
          <Col className='back-button'>
            <Button onClick={() => setPhase('three')}>Back</Button>
          </Col>
          <Col className='next-button'>
            <Button type='submit'>Create</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Confirm