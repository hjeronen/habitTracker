import { useState } from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'

const PhaseThree = ({ dataValues, setDataValues, setPhase }) => {
  const [selectedTargets, setSelectedTargets] = useState(dataValues.map(() => false))
  const [targets, setTargets] = useState(dataValues.map(() => 0))
  const [selectedGoals, setSelectedGoals] = useState(dataValues.map(() => 0))
  const [goals, setGoals] = useState(dataValues.map(() => 0))

  const selectATarget = (index) => {
    let selected = [...selectedTargets]
    selected[index] = !selectedTargets[index]
    setSelectedTargets(selected)
  }

  const setATarget = (index, value) => {
    let newTargets = [...targets]
    newTargets[index] = value
    setTargets(newTargets)
  }

  const selectAGoal = (index) => {
    let selected = [...selectedGoals]
    selected[index] = !selectedGoals[index]
    setSelectedGoals(selected)
  }

  const setAGoal = (index, value) => {
    let newGoals = [...goals]
    newGoals[index] = value
    setGoals(newGoals)
  }

  const saveDataValues = () => {
    const data = dataValues.map((item, i) => {
      const dataValue = { ...item }

      if (selectedTargets[i]) {
        dataValue.target = targets[i]
      }

      if (selectedGoals[i]) {
        dataValue.goal = goals[i]
      }

      return dataValue
    })

    setDataValues(data)
    setPhase('confirm')
  }

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>
            3. Set targets
          </Card.Title>
        </Card.Header>
        <Card>
          <Card.Header>
            All time targets
          </Card.Header>
          <Card.Body>
            {dataValues.map((data, i) =>
              <Card key={i}>
                <Row>
                  <Col>
                    <input type='checkbox' onChange={() => selectATarget(i)} />
                  </Col>
                  <Col>
                    {data.type}
                  </Col>
                  <Col>
                    <input
                      type='number'
                      value={targets[i]}
                      name='Type'
                      id='type'
                      disabled={!selectedTargets[i]}
                      onChange={({ target }) => setATarget(i, target.value)}
                    />
                  </Col>
                  <Col>
                    {data.unit}
                  </Col>
                </Row>
              </Card>
            )}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            Daily goals
          </Card.Header>
          <Card.Body>
            {dataValues.map((data, i) =>
              <Card key={i}>
                <Row>
                  <Col>
                    <input type='checkbox' onChange={() => selectAGoal(i)} />
                  </Col>
                  <Col>
                    {data.type}
                  </Col>
                  <Col>
                    <input
                      type='number'
                      value={goals[i]}
                      name='Type'
                      id='type'
                      disabled={!selectedGoals[i]}
                      onChange={({ target }) => setAGoal(i, target.value)}
                    />
                  </Col>
                  <Col>
                    {data.unit}
                  </Col>
                </Row>
              </Card>
            )}
          </Card.Body>
        </Card>
        <Card>
          Milestones
        </Card>
      </Card>
      <Container className='button-container'>
        <Row>
          <Col className='back-button'>
            <Button onClick={() => setPhase('two')}>Back</Button>
          </Col>
          <Col className='next-button'>
            <Button onClick={saveDataValues}>Next</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default PhaseThree