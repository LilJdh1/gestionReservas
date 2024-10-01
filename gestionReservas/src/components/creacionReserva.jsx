import React, {useState, useEffect} from "react";
import {db} from "../firebase/firebaseConfig"
import {collection, getDocs, addDoc, deleteDoc,updateDoc,doc} from 'firebase/firestore'

const CreacionReserva =()=>{
    const[nombre, setNombre] = useState('');
    const[numeroDePersonas,setNumeroDePersonas] = useState(0);
    const[fecha, setFecha] = useState('');
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
            });
            alert('Reserva creada con exito');
        } catch (error) {
            console.error(error);
            alert('Error al crear la reserva')
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre del cliente</label>
            <input type="text" value={nombre} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <label>Numero de personas</label>
            <input type="number" value={numeroDePersonas} onChange={(e) => setNumeroDePersonas(e.target.value)}/>
            <br/>
            <label>Fecha y hora de la reserva</label>
            <input type="datetime-local" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
            <br/>
            <label>Estado de la reserva</label>
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="Confirmada">Confirmada</option>
                <option value="Cancelada">Cancelada</option>
            </select>
            <br/>
            <button type="Submit">Hacer Reserva</button>
        </form>
    )
}
export default CreacionReserva;