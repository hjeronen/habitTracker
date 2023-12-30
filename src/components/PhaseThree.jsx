import { useState } from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'

const PhaseThree = ({ dataValues, setDataValues, setPhase }) => {
  const [selectedTargets, setSelectedTargets] = useState(dataValues.map(() => false))
  const [targets, setTargets] = useState(dataValues.map(() => 0))
  const [selectedGoals, setSelectedGoals] = useState(dataValues.map(() => false))
  const [goals, setGoals] = useState(dataValues.map(() => 0))
  const [selectedMilestones, setSelectedMilestones] = useState(dataValues.map(() => false))
  const [milestoneTypes, setMilestoneTypes] = useState(dataValues.map(() => ''))
  const [milestoneValues, setMilestoneValues] = useState(dataValues.map(() => 0))

  const milestoneOptions = [
    'even',
    'increasing'
  ]

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

  const selectAMilestone = (index) => {
    let selected = [...selectedMilestones]
    selected[index] = !selectedMilestones[index]
    setSelectedMilestones(selected)
  }

  const selectAMilestoneType = (valueIndex, typeIndex) => {
    let types = [...milestoneTypes]
    milestoneTypes[valueIndex] === milestoneOptions[typeIndex]
      ? types[valueIndex] = ''
      : types[valueIndex] = milestoneOptions[typeIndex]
    setMilestoneTypes(types)
  }

  const setAMilestoneValue = (index, value) => {
    let values = [...milestoneValues]
    values[index] = value
    setMilestoneValues(values)
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

      if (selectedMilestones[i]) {
        dataValue.milestones = {
          type: milestoneTypes[i],
          value: milestoneValues[i]
        }
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
          <Card.Header>
            Milestones
          </Card.Header>
          <Card.Body>
            {dataValues.map((data, i) =>
              <Card key={i}>
                <Container>
                  <Row>
                    <Col xs='1'>
                      <input type='checkbox' onChange={() => selectAMilestone(i)} />
                    </Col>
                    <Col xs='4'>
                      {data.type}
                    </Col>
                    <Col>
                      {milestoneOptions.map((option, j) =>
                        <Row key={j}>
                          <Col xs='1'>
                            <input
                              type='radio'
                              name={data}
                              onChange={() => selectAMilestoneType(i, j)}
                            />
                          </Col>
                          <Col>
                            <p>{option}</p>
                          </Col>
                          <Col>
                            <input
                              type='number'
                              value={milestoneTypes[i] === option ? milestoneValues[i] : ''}
                              name='milestoneValue'
                              id='milestoneValue'
                              disabled={milestoneTypes[i] !== option}
                              onChange={({ target }) => setAMilestoneValue(i, target.value)}
                            />
                          </Col>
                        </Row>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Card>
            )}
          </Card.Body>
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