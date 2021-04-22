
import firebase from "firebase/compat"

firebase.initializeApp({
    apiKey: "AIzaSyBhbxJ2LCX0iD298QVVsNHGbfJ7v3N-ajk",
    authDomain: "chill-point.firebaseapp.com",
    projectId: "chill-point",
    storageBucket: "chill-point.appspot.com",
    messagingSenderId: "399143735956",
    appId: "1:399143735956:web:10eb8083ae993ccf99da81"
});

firebase.messaging().onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    (self as any).registration.showNotification(notificationTitle,
        notificationOptions);
});