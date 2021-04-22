import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

(async () => {
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
    const messaging = getMessaging();
    const token = await getToken(messaging, { vapidKey: "BFvhbZZzr1PPJbpATfznhV04eyKGrzFhShvJwWbRe2tGBbtujMoe_gcMIcSGqnRQELdumpCcn9lwPaMeG68nmFE" });
    const div = document.createElement("div");
    div.innerHTML = `Copy this to server: ${token}`;
    document.body.appendChild(div);
})()