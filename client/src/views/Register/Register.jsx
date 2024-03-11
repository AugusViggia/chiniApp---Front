import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserHandlers } from "../../handlers/userHandlers";

const Register = () => {
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [registrationError, setRegistrationError] = useState("");

    const { handleRegister } = useUserHandlers(
        setEmailError,
        setPasswordError,
        setUsernameError,
        setRegistrationError
    );

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleRegister(event, email, username, password, confirmPassword);
    };
    
    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
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