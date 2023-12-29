export const getFormattedDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0') // Ensures the day is two digits
  const month = String(date.getMonth() + 1).padStart(2, '0') // Adds 1 because months are 0-indexed
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}