// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, setDoc} from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyA169ZV3Jy23fLYWe74uA2pIndF_djjjb8",
  authDomain: "user-authetication-ed51a.firebaseapp.com",
  projectId: "user-authetication-ed51a",
  storageBucket: "user-authetication-ed51a.firebasestorage.app",
  messagingSenderId: "155243892541",
  appId: "1:155243892541:web:74632d2215b36efdb0ff54",
  measurementId: "G-W13DKFDXEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(username,email,password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"hey,There i am using sms app"

        })
        await setDoc(doc(db,"sms",user.uid),{
            chatData:[]
            
        }) ;
         toast.success('Signup successful!');


        
    } catch (error) {

        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(""))
        
    }

}


const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
        toast.success("Login successful!");
        
        
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
        
    }

}
const logout = async()=>{
  try {
    await
    signOut(auth)
    toast.success("logged out");
    
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(""));
    
    
  }
}
export {signup,login,logout,auth,db}
