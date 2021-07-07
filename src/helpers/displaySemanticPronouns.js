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
