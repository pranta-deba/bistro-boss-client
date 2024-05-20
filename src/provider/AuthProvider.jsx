import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserLoader(false);
            } else {
                setUser(null);
                setUserLoader(false);
            }
        })
        return () => unSubscribe();
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }

    console.log("logged user : ", user);
    return (
        <AuthContext.Provider value={{ user, userLoader, createUser, loginUser, updateUser, logOut,googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;