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

  const saveTargets = () => {
    const data = dataValues.map((item, i) => ({ ...item, target: targets[i] }))
    console.log(targets)
    console.log(goals)
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
      const dataValue = {...item}

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
    <div>
      <Card>
        <Card.Header>
          <Card.Title>
            All time targets
          </Card.Title>
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
          <Card.Title>
            Daily goals
          </Card.Title>
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
      <Button onClick={saveTargets}>Check data</Button>
      <Button onClick={saveDataValues}>Confirm</Button>
    </div>
  )
}

export default PhaseThree