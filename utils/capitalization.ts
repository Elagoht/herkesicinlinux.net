const capitalize:
  (input: string) => string =
  (input) => {
    return input.replace(/\b\w/g, (match) => (
      match.toLocaleUpperCase('tr')
    ))
  }

export default capitalize