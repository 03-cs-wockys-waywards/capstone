// everyone else's likes should reference Jennie's UID

const seedUserData = [
  // main character - 30 year old software engineer living in NYC who enjoys cooking and also outgoing!
  {
    userId: '',
    email: 'jenny.kim.0514@gmail.com',
    firstName: 'Jenny',
    lastName: 'Kim',
    pronouns: ['she'],
    interests: [
      'Computer programming',
      'Cooking',
      'Roller skating',
      'Urban exploration',
      'Knife making',
    ],
    profilePicture: '',
    // reference Hailey and Darcie's UID
    likes: [],
  },
  {
    userId: '',
    email: 'cara.o.wade@hotmail.com',
    firstName: 'Cara',
    lastName: 'Wade',
    pronouns: ['they'],
    interests: [
      'Cooking',
      'Gambling',
      'Genealogy',
      'Glassblowing',
      'Computer programming',
    ],
    profilePicture: '',
    likes: [],
  },
  {
    userId: '',
    email: 'mk01234@gmail.com',
    firstName: 'Markus',
    lastName: 'Kirkland',
    pronouns: ['he'],
    interests: ['Cooking', 'Knitting', 'Driving', 'Fishing', 'Flag football'],
    profilePicture: '',
    likes: [],
  },
  {
    userId: '',
    email: 'abu.malone@gmail.com',
    firstName: 'Abubakr',
    lastName: 'Malone',
    pronouns: ['they'],
    interests: [
      'Cooking',
      'Mountain biking',
      'Mountaineering',
      'Mushroom hunting',
      'Mycology',
    ],
    profilePicture: '',
    likes: [],
  },
  {
    userId: '',
    email: 'lesss.callahan@gmail.com',
    firstName: 'Leslie',
    lastName: 'Callahan',
    pronouns: ['she', 'he'],
    interests: [
      'Cooking',
      'Skydiving',
      'Taekwondo',
      'Vehicle restoration',
      'Water sports',
    ],
    profilePicture: '',
    likes: [],
  },
  {
    userId: '',
    email: 'sam.ayers.0987@gmail.com',
    firstName: 'Sameera',
    lastName: 'Ayers',
    pronouns: ['undisclosed'],
    interests: [
      'Cooking',
      'Beekeeping',
      'Sports',
      'Stand-up comedy',
      'Listening to music',
    ],
    profilePicture: '',
    likes: [],
  },
  {
    userId: '',
    email: 'vijay.e.vasquez@hotmail.com',
    firstName: 'Vijay',
    lastName: 'Vasquez',
    pronouns: ['he'],
    interests: [
      'Cooking',
      'Ghost hunting',
      'Hiking',
      'World building',
      'Astronomy',
    ],
    profilePicture: '',
    likes: [],
  },
  {
    userId: '',
    email: 'lejamcc777@gmail.com',
    firstName: 'Leja',
    lastName: 'Mcclure',
    pronouns: ['she'],
    interests: ['Cooking', 'Sewing', 'Singing', 'Sketching', 'Soapmaking'],
    profilePicture: '',
    likes: [],
  },
  // soul mate found!
  {
    userId: '',
    email: 'mathews.hailey.34@gmail.com',
    firstName: 'Hailey',
    lastName: 'Mathews',
    pronouns: ['they'],
    interests: [
      'Cooking',
      'Knife making',
      'Computer programming',
      'Urban exploration',
      'Roller skating',
    ],
    profilePicture: '',
    likes: [],
  },
  // almost soul mate
  {
    userId: '',
    email: 'dardarcie.wong@hotmail.com',
    firstName: 'Darcie',
    lastName: 'Wong',
    pronouns: ['he'],
    interests: [
      'Knife making',
      'Cooking',
      'Computer programming',
      'Archery',
      'Urban exploration',
    ],
    profilePicture: '',
    likes: [],
  },
  // Torie's seed data begins
  // "Main character" is Peter - early 30s, adventurous and quirky, who just moved to NYC. Looking for friends and possible soul mate.
  {
    email: 'petedays@gmail.com',
    firstName: 'Peter',
    lastName: 'Days',
    interests: ['Graffiti', 'Parkour', 'Ghost hunting', 'Larping', 'Cooking'],
    profilePicture:
      'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxwb3J0cmFpdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['he'],
  },
  {
    email: 'art@gmail.com',
    firstName: 'Artemisia',
    lastName: 'Alvarez',
    interests: [
      'Cooking',
      'Cosplaying',
      'Fashion',
      'Ice skating',
      'Kite flying',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1542328523081-0ffac8697606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['she'],
  },
  // potential soul mate/best friend
  {
    email: 'minnie@gmail.com',
    firstName: 'Minnie',
    lastName: 'Salter',
    interests: [
      'Graffiti',
      'Cosplaying',
      'Ghost hunting',
      'Cooking',
      'Roller skating',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['she'],
  },
  {
    email: 'indi@gmail.com',
    firstName: 'India',
    lastName: 'Hodges',
    interests: [
      'Mushroom hunting',
      'Flower arranging',
      'Gardening',
      'Beekeeping',
      'Pottery',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1622635883222-7f89c176ed1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['she'],
  },
  {
    email: 'ronbon@gmail.com',
    firstName: 'Ronnie',
    lastName: 'Bonner',
    interests: [
      '3D printing',
      'Photography',
      'Gardening',
      'Pottery',
      'Model building',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1604945964942-83d4d3e92a2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUxfHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['he'],
  },
  {
    email: 'jbaldwin@gmail.com',
    firstName: 'Jay',
    lastName: 'Baldwin',
    interests: [
      'Tai chi',
      'Foraging',
      'Knife making',
      'Cooking',
      'Board games',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1597225156148-b82b8b4d0c7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['he'],
  },
  {
    email: 'rstone@gmail.com',
    firstName: 'Raleigh',
    lastName: 'Stone',
    interests: [
      'Foraging',
      'Photography',
      'Skateboarding',
      'Tai chi',
      'Jigsaw puzzles',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    pronouns: ['they'],
  },
  {
    email: 'joriapple@gmail.com',
    firstName: 'Jori',
    lastName: 'Apple',
    interests: ['Cosplaying', 'Dance', 'Magic', 'Foraging', 'Fashion'],
    profilePicture:
      'https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['they'],
  },
  {
    email: 'maristrange@gmail.com',
    firstName: 'Mariana',
    lastName: 'Strange',
    interests: [
      'Cooking',
      'Jigsaw puzzles',
      'Ice skating',
      'Origami',
      'Photography',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['undisclosed'],
  },
  {
    email: 'gfran@gmail.com',
    firstName: 'Gene',
    lastName: 'Francis',
    interests: [
      'Mushroom hunting',
      'Reading',
      'Bird watching',
      'Gardening',
      'Cooking',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1496442485495-dcb2fa6bb0bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    pronouns: ['she', 'they'],
  },
]
