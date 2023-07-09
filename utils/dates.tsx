export const epochToDate: (epoch: number) => string = (epoch) => {
  const date = new Date(epoch * 1000)
  const year = date.getFullYear()
  let _month = date.getMonth() + 1
  let _day = date.getDate()
  const day = (_day < 10) ? '0' + _day : _day
  const month = (_month < 10) ? '0' + _month : _month

  return day + '/' + month + '/' + year
}
