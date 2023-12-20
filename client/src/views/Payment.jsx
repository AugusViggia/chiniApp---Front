// import React from 'react'
// import { useNavigate } from 'react-router';
// import { useEffect } from 'react';
// import axios from "axios";

// // const apiURL = "https://chiniapp-api-production.up.railway.app";
// const apiURL = "http://localhost:3000";

// const Payment = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Hacer una solicitud al servidor para ejecutar la lógica de successEvent
//                 const response = await axios.get(
//                     `${apiURL}/send-email`,
//                     );
//                     console.log("Soy la response en Payment:", response);
//                 if (response.data === "approved") {
//                     // Lógica adicional si es necesario
//                     // Navega a la página de inicio
//                     navigate("/");
//                 } else {
//                     // Maneja otros estados de colección si es necesario
//                     console.error("Payment not approved");
//                 }
//             } catch (error) {
//                 // Manejar errores si es necesario
//                 console.error("Error en la solicitud al servidor:", error);
//             }
//         };

//         fetchData();
//     }, [navigate]);

//     return (
//         <div>
//             <h1>Procesando el pago...</h1>
//             {/* Puedes agregar más contenido según sea necesario */}
//         </div>
//     );
// };

// export default Payment;