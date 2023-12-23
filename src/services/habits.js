import axios from 'axios'
const baseUrl = 'http://localhost:3001/habits'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addHabit = async (newHabit) => {
  const response = await axios.post(baseUrl, newHabit)
  return response.data
}

const updateHabit = async (updatedHabit) => {
  const response = await axios.put(baseUrl + '/' + updatedHabit.id, updatedHabit)
  return response.data
}

const deleteHabit = async (id) => {
  const response = await axios.delete(baseUrl + '/' + id)
  return response.data
}

export default { getAll, addHabit, updateHabit, deleteHabit }