import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZk4HDejpfW3GcgjxrfUVXLXN8tOhlZec",
  authDomain: "easy-shop-354ca.firebaseapp.com",
  databaseURL: "https://easy-shop-354ca-default-rtdb.firebaseio.com",
  projectId: "easy-shop-354ca",
  storageBucket: "easy-shop-354ca.firebasestorage.app",
  messagingSenderId: "563727875591",
  appId: "1:563727875591:web:855e3d75002e787935f4a2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);