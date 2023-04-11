import React, { useEffect, useContext } from "react";
import { EmailContext } from "../store/AuthContext";
import { AuthProps, GlobalContent } from "../interfaces/interface";
const { initializeApp } = require("firebase/app");
const {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect
} = require("firebase/auth");

const provider = new GoogleAuthProvider();
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCB4tJiWBcHOdsmE2pzbm80xfd1zCNv8Dc",
    authDomain: "boxwood-chalice-339814.firebaseapp.com",
    databaseURL: "https://boxwood-chalice-339814-default-rtdb.firebaseio.com",
    projectId: "boxwood-chalice-339814",
    storageBucket: "boxwood-chalice-339814.appspot.com",
    messagingSenderId: "77685519438",
    appId: "1:77685519438:web:6a47db9f8088883451ff1f",
    measurementId: "G-40HP4GZ066"
  });
const auth = getAuth(firebaseApp);

const Auth = (props: AuthProps) => {
    const emailContext = useContext<GlobalContent>(EmailContext);
    const {email, setEmail} = emailContext;

    useEffect(()=>{
        onAuthStateChanged(auth, (user:any) => {
          if (user != null) {
                setEmail(user.email);
              } else {
                signInWithRedirect(auth, provider);
              } 
        });
    },[])

    return(
        <div>
           {email ? props.children: undefined}
        </div>
    )
};


export default Auth;
