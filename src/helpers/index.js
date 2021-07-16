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
};

// for top navigation -- renders user's name using route params
export const renderName = (route) => {
  return `${route.params.user.firstName} ${route.params.user.lastName[0]}.`;
};

// error handler
export const handleErrors = (errorCode) => {
  // error codes associated with login/registration
  if (errorCode === 'auth/invalid-email') {
    alert('Please enter a valid email address.');
  } else if (errorCode === 'auth/email-already-in-use') {
    alert(
      'This email already exists with an account. Please type in a different email address.'
    );
  } else if (errorCode === 'auth/operation-not-allowed') {
    alert('This account is disabled. Please contact us to enable the account.');
  } else if (errorCode === 'auth/weak-password') {
    alert('The password is too weak. Please use 6 or more characters.');
  } else if (errorCode === 'auth/user-not-found') {
    alert('No account exists with this email address.');
  } else if (errorCode === 'auth/wrong-password') {
    alert('Please enter a correct password.');
  }
};
