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

Watch our demo video [here](https://youtu.be/BZztK0R6BBk?list=PLx0iOsdUOUmnxvdRhz1frAMDEiERKJ9-v)!

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

### App Features

- Persistent Login: Through Firebase Authentication
- Discover List: Displays users who share at least one common interest
- Matches List: Displays users who have liked each other
- Search: Can search users by interest with auto-complete using RegEx
- Chat: Real-time, persistent chat for users to communicate through the app
- Edit Profile: User can update profile picture, name, pronouns, and interests
- Welcome Modal: For new users, overviewing how to use the app
- Single User Profile: Liking functionality & pop-up photo modal

### Technical Features

- Registration with E-mail & Password
- Writing to & reading from Firestore Database
- React Navigation with nested stack & bottom tab navigators

## Notes on Development

We developed customized solutions for seeding user data, structuring chat data, and handling navigation. Read about our takeaways here:

- Custom bulk seed data for users: https://medium.com/@devkarenc/journey-to-the-firebase-seeding-cloud-firestore-and-authentication-4934240438
- Structuring data for chat: https://medium.com/@fpenfold723/navigating-cloud-firestores-querying-limitations-802970340a6e
- Handling nested navigation: https://medium.com/@vkim20/an-introduction-to-nested-navigation-in-react-native-4695fda86974

## Next Steps

The next steps for Tingle include incorporating a concierge feature that will suggest events and schedule dates for matched users, and an anonymous endorsement feature to create a safer space for users.

## Developers

Meet the team behind Tingle!

- Karen Choi - [Github](https://github.com/DevKarenC) | [LinkedIn](https://www.linkedin.com/in/seungahchoi/)
- Torie Kim - [Github](https://github.com/toriekim) | [LinkedIn](https://www.linkedin.com/in/victoriakim20/)
- Fernanda Penfold - [Github](https://github.com/fernandapenfold) | [LinkedIn](https://www.linkedin.com/in/fernandapenfold/)
