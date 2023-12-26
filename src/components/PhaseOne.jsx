import { Button } from 'react-bootstrap'

const PhaseOne = ({ name, setName, setPhase }) => {
  return (
    <div>
      <h2>1. Set name for habit</h2>
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
      <Button onClick={() => setPhase('two')}>Next</Button>
    </div>
  )
}

export default PhaseOne