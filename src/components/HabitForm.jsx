import { useState, useEffect } from 'react'

const HabitForm = ({ habit, createNew, updateHabit }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    habit ? setName(habit.name) : setName('')
  }, [habit])

  const data = [
    {
      type: 'default',
      unit: 'test',
      value: 0
    }
  ]

  const create = async (event) => {
    event.preventDefault()

    const newHabit = {
      name,
      data
    }

    const created = await createNew(newHabit)
    if (created) {
      setName('')
    }
  }

  const update = async (event) => {
    event.preventDefault()

    const newHabit = {
      id: habit.id,
      name,
      data
    }

    const updated = await updateHabit(newHabit)
    if (updated) {
      setName('')
    }
  }

  return (
    <form onSubmit={habit ? update : create}>
      <h2>Create new habit</h2>
      <div>
        Name:
        <input 
          type='text'
          value={name}
          name='Name'
          id='name'
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <button type='submit'>{habit ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default HabitForm