import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import PhaseOne from './PhaseOne'
import PhaseTwo from './PhaseTwo'
import PhaseThree from './PhaseThree'
import Confirm from './Confirm'

const HabitForm = ({ createNew, setView }) => {
  const [phase, setPhase] = useState('one')
  const [name, setName] = useState('')
  const [dataValues, setDataValues] = useState([])

  const create = (event) => {
    event.preventDefault()

    const newHabit = {
      name,
      dataValues
    }

    if (dataValues.length === 0) {
      newHabit.default = { dataPoints: [] }
    }

    createNew(newHabit)
  }

  const renderPhase = () => {
    switch (phase) {
      case 'one':
        return <PhaseOne name={name} setName={setName} setPhase={setPhase} setView={setView} />
      case 'two':
        return <PhaseTwo dataValues={dataValues} setDataValues={setDataValues} setPhase={setPhase} />
      case 'three':
        return <PhaseThree dataValues={dataValues} setDataValues={setDataValues} setPhase={setPhase} />
      case 'confirm':
        return <Confirm name={name} dataValues={dataValues} setPhase={setPhase} />
      default:
        return <PhaseOne name={name} setName={setName} create={create} />
    }
  }

  return (
    <Container className='content-container'>
      <Container className='form-header'>
        <Row>
          <Col sm='2'>
            <Button
              variant='outline-danger'
              onClick={() => setView('home')}>
              Cancel
            </Button>
          </Col>
          <Col sm='8' className='subheader'>
            <h2>Create a New Habit</h2>
          </Col>
        </Row>
      </Container>
      <Form onSubmit={create}>
        {renderPhase()}
      </Form>
    </Container>
  )
}

export default HabitForm