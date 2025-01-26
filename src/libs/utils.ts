export const insertCharFromEnd = (str: string, char: string) => {
  if (str.length < 3) {
    return str + char // If the string has fewer than 3 characters, just append the character.
  }

  const index = str.length - 3 // Find the position 3 characters from the end.
  return str.slice(0, index) + char + str.slice(index) // Insert the character.
}

export const CFormatter = (num: number) => {
  return `$${num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
}
