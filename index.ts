import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

(async () => {
    const div_hi = document.createElement("div");
    div_hi.innerHTML = `Hello World`;
    document.body.appendChild(div_hi);
    navigator.serviceWorker.register('/Navigator/firebase-messaging-sw.js', { scope: '/' });

    initializeApp({
        apiKey: "AIzaSyBhbxJ2LCX0iD298QVVsNHGbfJ7v3N-ajk",
        authDomain: "chill-point.firebaseapp.com",
        projectId: "chill-point",
        storageBucket: "chill-point.appspot.com",
        messagingSenderId: "399143735956",
        appId: "1:399143735956:web:10eb8083ae993ccf99da81"
    });
    getAnalytics();

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    try {
        const messaging = getMessaging();
        const token = await getToken(messaging, { vapidKey: "BFvhbZZzr1PPJbpATfznhV04eyKGrzFhShvJwWbRe2tGBbtujMoe_gcMIcSGqnRQELdumpCcn9lwPaMeG68nmFE" });
        const div = document.createElement("div");
        div.innerHTML = `Copy this to server: ${token}`;
        document.body.appendChild(div);
    } catch (e) {
        const div_2 = document.createElement("div");
        div_2.innerHTML = `Error: ${JSON.stringify(e)}`;
        document.body.appendChild(div_2);
    }
})()