<h1 align="center">
<img width="250px" src="assets/images/header-logo.png" alt="Tingle logo">
</h1>
<p align="center" style="font-style:italic">
Social media application that strives to connect people, one interest at a time.
</p>
<h1 align="center">
<img width="750px" style="border-radius: 15px" src="assets/phone-mockup.jpg" alt="Tingle Mockups">
</h1>

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Notes on Development](#notes-on-development)
- [Next Steps](#next-steps)
- [Developers](#developers)
- [Disclaimer](#disclaimer)

## Introduction

Tingle is a social media mobile application that cultivates connections between people through selected niche interests. Users can choose from a list of 150+ interests, ranging from computer programming, macrame, to urban exploration.

Making friends as an adult is hard. Dating is even harder. A lot of apps out there are based on superficial values rather than fostering genuine connections. We wanted to create an app that would connect people through the hobbies and interests that make their lives more colorful.

## Getting Started

Fork and clone this repo. Then, `npm install`.

Create a Firebase config file:

`mkdir src/firebaseSpecs && touch src/firebaseSpecs/config.js`

Add your Firebase configuration into `src/firebaseSpecs/config.js`:

```
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'your-project-id-1234',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }
```

Run `expo start`.

## Tech Stack

- React Native
- Redux
- Firebase (Cloud Firestore & Authentication)
- Cloudinary
- Expo

## Features

See Tingle in action!

## Notes on Development

## Next Steps

## Developers

Meet the team behind Tingle!

- Karen Choi - [Github](https://github.com/DevKarenC) | [LinkedIn](https://www.linkedin.com/in/seungahchoi/)
- Torie Kim - [Github](https://github.com/toriekim) | [LinkedIn](https://www.linkedin.com/in/victoriakim20/)
- Fernanda Penfold - [Github](https://github.com/fernandapenfold) | [LinkedIn](https://www.linkedin.com/in/fernandapenfold/)

## Disclaimer

```

```
