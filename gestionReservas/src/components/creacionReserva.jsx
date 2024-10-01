import React, {useState, useEffect} from "react";
import {db} from "../firebase/firebaseConfig"

const CreacionReserva =()=>{
    const[nombre, setNombre] = useState('');
    const[numeroDePersonas,setNumeroDePersonas] = useState(0);
    const[fecha, setFecta] = useState('');
    const[hora, setHora] = useState('');
    const[estado, setEstado] = useState('confirmada')

    const handleEnvio = async(event)=>{
        event.prevenDefault();
        try {
            const referenciaReserva = db.collection('reservaciones').doc();
            await referenciaReserva.set({
                nombre,
                numeroDePersonas,
                fecha,
                hora,
                estado
            })
        } catch (error) {
            
        }
    }
}