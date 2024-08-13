import  dotenv from 'dotenv';
dotenv.config();

const firebase = {
    firebaseConfig: {
        apiKey: process.env.VITE_APIKEY,
        authDomain: process.env.VITE_AUTHDOMAIN,
        projectId: process.env.VITE_PROJECTID,
        storageBucket: process.env.VITE_STORAGEBUCKET,
        messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
        appId: process.env.VITE_APPID,
        measurementId: process.env.VITE_MEASUREMENTID
    },
};

export default firebase
