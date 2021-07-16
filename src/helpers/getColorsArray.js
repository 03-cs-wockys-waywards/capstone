import { getRandomLightColor } from './getRandomLightColor'

export const getColorsArray = (num) => {
  const colors = new Array(num)
  for (let i = 0; i < colors.length; i++) {
    colors[i] = getRandomLightColor()
  }
  return colors
}

export const getLightColorsArray = (arrOfColors, num) => {
  const colors = new Array(num)
  for (let i = 0; i < colors.length; i++) {
    const index = Math.floor(Math.random() * arrOfColors.length)
    colors[i] = arrOfColors[index]
  }
  return colors
}
