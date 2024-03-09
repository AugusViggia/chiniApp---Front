import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIdToken, setUser, setUserName } from "../../redux/slice/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "../../firebase/firebase";

const Register = () => {
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [registrationError, setRegistrationError] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const isUsernameValid = (username) => {
        return username.length >= 4;
    };

    const isPasswordValid = (password) => {
        return password.length >= 6;
    };

    // ARCHIVO userHandlers.js
    const handleRegister = async (event) => {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");
        setUsernameError("");
        setRegistrationError("");

        if (!isEmailValid(email)) {
            setEmailError("Correo electrónico inválido");
            return;
        }

        if (!isUsernameValid(username)) {
            setUsernameError("El nombre de usuario debe tener al menos 4 caracteres");
            return;
        }

        if (!isPasswordValid(password)) {
            setPasswordError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await createUserWithEmailAndPassword(
                firebase_auth,
                email,
                password
            );
            console.log(response);

            dispatch(setUser(response.user.email));
            dispatch(setUserName(username));
            dispatch(setIdToken(response._tokenResponse.idToken));

            localStorage.setItem("userEmail", email);
            navigate("/login");
        } catch (error) {
            console.log("Error durante el registro Firebase:", error);
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p>{usernameError}</p>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p>{passwordError}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
                <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
            </form>
            {registrationError && <p>{registrationError}</p>}
        </div>
    );
};

export default Register;
