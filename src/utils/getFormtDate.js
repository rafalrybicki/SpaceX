export function getFormatDate(date) {
  const dateArr = new Date(date).toDateString().split(" ")
  return `${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`
}