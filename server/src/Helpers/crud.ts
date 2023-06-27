

import { getFirestore, collection, getDocs, doc, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCwN2sMv4845F4rBFW_H5pkZUDB29a36JA",
    authDomain: "therapistproject-52485.firebaseapp.com",
    projectId: "therapistproject-52485",
    storageBucket: "therapistproject-52485.appspot.com",
    messagingSenderId: "55295111301",
    appId: "1:55295111301:web:60e2f472e3c8fbfa29f9ec",
    measurementId: "G-1G1WPDY5G0"
  });

// * TODO - mudar para classes

const db = getFirestore(firebaseApp); 

/**
 * @interface userSaveData
 * @property {string} userEmail - Email do usuário.
 * @property {string} kind - Kind que será salvo a informação.
 */
interface userSaveData {
    userEmail:string,
    kind:string
}
export class Crud{
    email:string;

    constructor(email) {
        this.email = email;
    }

    async update(userSaveData:userSaveData, data:object, id:string){
        try {
            const {userEmail, kind} = userSaveData
            const _post = doc(db, `psicodevlicos`, userEmail, kind, id)
            return setDoc(_post, data)
        } catch (error) {
            throw error;
        }
    }

    async create(userSaveData:userSaveData, data:object) {
        try {
            const {userEmail, kind} = userSaveData;
            const _post = collection(db, `psicodevlicos/${userEmail}/${kind}`)
            const resp = await addDoc(_post, data);
            return { ...data, id: resp.id }   
        } catch (error) {
            throw error;
        }
    }

    async remove(userSaveData:userSaveData, id:string){
        try {
            const {userEmail, kind} = userSaveData;
            const removeItem = doc(db, `psicodevlicos`, userEmail, kind, id)
            const resp = await deleteDoc(removeItem)
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async listAll(userSaveData:userSaveData){
        try {
            const {userEmail, kind} = userSaveData;
            const postCol = collection(db, `psicodevlicos/${userEmail}/${kind}`);
            const resp = await getDocs(postCol);
            console.log("resp", resp)
            const returnList = resp.docs.map((doc:any) => { return { id: doc.id, ...doc.data()}});
            return returnList;
        } catch (error) {
            console.log('error', error)
            throw error;
        }
    }

    async getById(entity:string){
        try {
            const citiesCol = collection(db, entity);
            const resp = await getDocs(citiesCol);
            const returnList = resp.docs.map((doc:any) => doc.data());
            return returnList;
        } catch (error) {
            throw error;
        }
    }
}

