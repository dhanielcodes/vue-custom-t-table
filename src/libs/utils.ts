export const insertCharFromEnd = (str: string, char: string) => {
  if (str.length < 3) {
    return str + char
  }

  const index = str.length - 3
  return str.slice(0, index) + char + str.slice(index)
}

export const CFormatter = (num: number) => {
  return `$${num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
}
