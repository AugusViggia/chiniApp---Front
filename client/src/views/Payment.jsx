import React from 'react'
import { useNavigate } from 'react-router';
import axios from "axios";

const apiURL = "https://chiniapp-api-production.up.railway.app";

const Payment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            // Simulación de lógica para verificar si el pago fue aprobado
            const isPaymentApproved = true; // Puedes ajustar esto según tu lógica real

            if (isPaymentApproved) {
                try {
                    // Hacer una solicitud al servidor para ejecutar la lógica de successEvent
                    const response = await axios.post(
                        `${apiURL}/success`,
                        data
                    );

                    // Manejar la respuesta del servidor si es necesario
                    console.log("Respuesta del servidor:", response.data);

                    // Después, redirigir a /home
                    navigate("/home");
                } catch (error) {
                    // Manejar errores si es necesario
                    console.error("Error en la solicitud al servidor:", error);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Procesando el pago...</h1>
            {/* Puedes agregar más contenido según sea necesario */}
        </div>
    );
};

export default Payment;