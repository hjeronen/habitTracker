import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import PhaseOne from './PhaseOne'
import PhaseTwo from './PhaseTwo'
import PhaseThree from './PhaseThree'
import Confirm from './Confirm'

const HabitForm = ({ habit, createNew, updateHabit }) => {
  const [phase, setPhase] = useState('one')
  const [name, setName] = useState('')
  const [dataValues, setDataValues] = useState([])

  useEffect(() => {
    habit ? setName(habit.name) : setName('')
  }, [habit])

  const create = (event) => {
    event.preventDefault()

    const newHabit = {
      name,
      dataValues
    }

    createNew(newHabit)
  }

  const update = async (event) => {
    event.preventDefault()

    const newHabit = {
      id: habit.id,
      name,
      dataValues
    }

    updateHabit(newHabit)
  }

  const renderPhase = () => {
    switch (phase) {
      case 'one':
        return <PhaseOne name={name} setName={setName} setPhase={setPhase} />
      case 'two':
        return <PhaseTwo dataValues={dataValues} setDataValues={setDataValues} setPhase={setPhase} />
      case 'three':
        return <PhaseThree dataValues={dataValues} setDataValues={setDataValues} setPhase={setPhase} />
      case 'confirm':
        return <Confirm name={name} dataValues={dataValues} />
      default:
        return <PhaseOne name={name} setName={setName} create={create} />
    }
  }

  return (
    <Form onSubmit={habit ? update : create}>
      <h2>Create new habit</h2>
      {renderPhase()}
    </Form>
  )
}

export default HabitForm