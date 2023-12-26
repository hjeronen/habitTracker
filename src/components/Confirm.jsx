import { Button, Card, Container, Row } from 'react-bootstrap'

const Confirm = ({ name, dataValues }) => {
  return (
    <Container>
      Check habit data:
      <Card>
        Habit name: {name}
      </Card>
      <Card>
        Data
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
      <Button type='submit'>Create</Button>
    </Container>
  )
}

export default Confirm