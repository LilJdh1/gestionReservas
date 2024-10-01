// Manejador para actualizar los datos en el estado local del formulario
const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaReserva({
        ...nuevaReserva,
        [name]: value
    });
};

// Manejador para actualizar la reserva en Firestore
const actualizarReserva = async (e) => {
    e.preventDefault();
    if (reservaSeleccionada) {
        const docRef = doc(db, 'reservaciones', reservaSeleccionada);
        try {
            await updateDoc(docRef, nuevaReserva);
            alert('Reserva actualizada exitosamente');
            setReservaSeleccionada(null); // Limpiar selección después de la actualización
            setNuevaReserva({ nombre: '', numeroDePersonas: '', fecha: '', estado: '' });
        } catch (error) {
            console.error('Error actualizando la reserva: ', error);
        }
    }
};