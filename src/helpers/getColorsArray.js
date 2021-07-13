import { getRandomLightColor } from "./getRandomLightColor";

export const getColorsArray = (num) => {
  const colors = new Array(num);
  for (let i = 0; i < colors.length; i++) {
    colors[i] = getRandomLightColor();
  }
  return colors;
} 