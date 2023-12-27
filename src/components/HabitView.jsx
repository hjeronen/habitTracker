import { Button, Col, Container, Row } from 'react-bootstrap'

const HabitView = ({ habit, setView }) => {
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
            <Col sm='6' style={{ display: 'flex', justifyContent: 'right', paddingRight: '10px' }}>
              <Button>Modify settings</Button>
            </Col>
            <Col sm='3'>
              <Button onClick={() => setView('datapoints')}>See data points</Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <h5 className='habitview-subheader'>Daily progress</h5>
        <h5 className='habitview-subheader'>Daily goals</h5>
        <h5 className='habitview-subheader'>Other kinds of graphs here</h5>
      </Container>
      <Container className='button-container'>
        <Button>Add new graph</Button>
      </Container>
    </Container>
  )
}

export default HabitView