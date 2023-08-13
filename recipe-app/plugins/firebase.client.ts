import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const firebaseConfig = {
		apiKey: "AIzaSyA1HUb-0xOAOJ-bUIn1fvaWldWPk73X0rU",
		authDomain: "my-recipe-app-7dff3.firebaseapp.com",
		projectId: "my-recipe-app-7dff3",
		storageBucket: "my-recipe-app-7dff3.appspot.com",
		messagingSenderId: "836480659593",
		appId: "1:836480659593:web:30a64a5b61d93a805d1658",
		measurementId: "G-BLFFHP71Z0",
	};
	const app = initializeApp(firebaseConfig);

	const analytics = getAnalytics(app);
	const auth = getAuth(app);
	const firestore = getFirestore(app);

	nuxtApp.vueApp.provide("auth", auth);
	nuxtApp.provide("auth", auth);

	nuxtApp.vueApp.provide("firestore", firestore);
	nuxtApp.provide("firestore", firestore);
});
