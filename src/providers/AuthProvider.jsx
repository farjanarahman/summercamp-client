import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser);
            setLoading(false);
            return result;
    })
    .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
    //         console.log('Logged in user inside auth state observer', loggedUser)
    //         setUser(loggedUser);
    //         setLoading(false);
    //     });

    //     return () => {
    //         unsubscribe();
    //     };

    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log("current user", currentUser);
          //  get and set token
    
          if (currentUser) {
            axios
              .post("http://localhost:5000/jwt", { email: currentUser.email })
              .then((data) => {
                console.log(data);
                localStorage.setItem("access-token", data.data.token);
                setLoading(false);
              });
          } else {
            localStorage.removeItem("access-token");
          }
        });
        return () => {
          return unsubscribe();
        };
      }, []);

    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
