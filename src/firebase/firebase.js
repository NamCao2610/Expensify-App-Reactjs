import firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').once('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
// })

// database.ref('expenses').push({
//     description: 'Total Bill',
//     amount: 23,
//     note: 'Nam cute',
//     createdAt: 456212333
// }).then(() => {
//     console.log('Da them object');
// }).catch(err => {
//     console.log('Loi upated')
// })
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref().set({
//     name: 'Nam Cao dep zai',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'HoChiMinh',
//         country: 'VietNam'
//     }
// }).then((data) => {
//     console.log('Day la name', data);
// }).catch(err => {
//     console.log('Error: ', err)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// }).then(data => {
//     console.log('Da update')
// }).catch(err => {
//     console.log('Error: ', err)
// })
