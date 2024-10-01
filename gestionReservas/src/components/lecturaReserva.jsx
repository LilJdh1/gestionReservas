import React,{useEffect,useState} from "react";
import { getFirestore } from "firebase/firestore";
import {app } from "../firebase/firebaseConfig";

const db= getFirestore;
const LecturaReserva =()=>{
    const [lectura, setLectura]= useState([]);
    useEffect (()=>{
        const referenciaReserva = db.collection('reservaciones')
        referenciaReserva.onSnapshot((snapshot)=>{
            const listaDeReservaciones = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
            setLectura(listaDeReservaciones);
        })
    },[]);
    return(
        <ul>
            {lectura.map((reservaciones) =>(
                <li key={reservaciones.id}>
                    <p>Nombre del cliente: {reservaciones.nombre}</p>
                    <p>Numero de personas: {reservaciones.numeroDePersonas}</p>
                    <p>Fecha y hora de la reserva: {reservaciones.fecha}</p>
                    <p>Estado de la reserva: {reservaciones.estado}</p>
                </li>
            ))}
        </ul>
    )
};
export default LecturaReserva;
