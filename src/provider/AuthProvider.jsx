import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [userLoader, setUserLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                axiosPublic.post('/jwt', { email: currentUser.email })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                        }
                    })
                setUser(currentUser);
                setUserLoader(false);
            } else {
                setUser(null);
                setUserLoader(false);
                localStorage.removeItem('token');
            }
        })
        return () => unSubscribe();
    }, [axiosPublic])

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
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }

    console.log("logged user : ", user);
    return (
        <AuthContext.Provider value={{ user, userLoader, createUser, loginUser, updateUser, logOut, googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;