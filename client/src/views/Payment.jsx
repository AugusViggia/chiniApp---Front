// import React from 'react'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from "axios";

// const apiURL = "https://chiniapp-api-production.up.railway.app";
const apiURL = "http://localhost:3000";

const Payment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            // Simulación de lógica para verificar si el pago fue aprobado
            const isPaymentApproved = true; // Puedes ajustar esto según tu lógica real

            if (isPaymentApproved) {
                try {
                    // Hacer una solicitud al servidor para ejecutar la lógica de successEvent
                    const response = await axios.get(
                        `${apiURL}/send-email`,
                    );

                    console.log("soy la response del front de success: ", response);

                    navigate("/");
                } catch (error) {
                    // Manejar errores si es necesario
                    console.error("Error en la solicitud al servidor:", error);
                }
            }
        };

        fetchData();
    }, [navigate]);

    return (
        <div>
            <h1>Procesando el pago...</h1>
            {/* Puedes agregar más contenido según sea necesario */}
        </div>
    );
};

export default Payment;