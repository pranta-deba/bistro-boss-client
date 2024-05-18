import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(true);
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
    const logOut = () => {
        return signOut(auth);
    }

    console.log("logged user : ", user);
    return (
        <AuthContext.Provider value={{ user, userLoader, createUser, loginUser, updateUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;