import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../redux/slice/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "../../firebase/firebase";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // ARCHIVO userHandlers.js
    const handleLogIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(
                firebase_auth,
                email,
                password
            );

            console.log(response);

            dispatch(setUser(response.user.email));
            localStorage.setItem("userEmail", email);
            navigate("/");
        } catch (error) {
            console.log("Error al iniciar sesion: ", error);
        }
    };
    
    return (
        <div>
            <div>
                <h3>Log In</h3>
            </div>
            <div>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleLogIn}>Sign In</button>
                <button onClick={() => navigate("/register")}>
                    You don't have an account? Register
                </button>
            </div>
        </div>
    );
};

export default LogIn;
