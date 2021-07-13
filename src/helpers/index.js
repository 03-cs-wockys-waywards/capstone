export const displaySemanticPronouns = (pronoun) => {
  if (pronoun === 'she') {
    return 'She / Her';
  } else if (pronoun === 'he') {
    return 'He / Him';
  } else if (pronoun === 'they') {
    return 'They / Them';
  } else if (pronoun === 'undisclosed') {
    return "I'd rather not say";
  }
};

export const getRandomLightColor = () => {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export const getColorsArray = (num) => {
  const colors = new Array(num);
  for (let i = 0; i < colors.length; i++) {
    colors[i] = getRandomLightColor();
  }
  return colors;
}