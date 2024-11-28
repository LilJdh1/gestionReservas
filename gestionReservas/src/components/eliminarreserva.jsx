import React,{useEffect,useState} from "react";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, onSnapshot, snapshotEqual } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const deleteReservation = async (id) => {
    const db = firebase.firestore();
    await db.collection('LecturaReserva').doc(id).delete();
  };
  