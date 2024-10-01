import React,{useEffect,useState} from "react";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, onSnapshot, snapshotEqual } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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
