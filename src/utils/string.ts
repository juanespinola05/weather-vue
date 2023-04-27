export const capitalizeAll = (string: string) => {
  return string
    .split(/\s/gm)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}
