

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

async function getById(entity:string){
    const citiesCol = collection(db, entity);
    return getDocs(citiesCol).then( (resp : any) => { 
        const returnList = resp.docs.map((doc:any) => doc.data());
        return returnList;
    });
}

async function getAll(userSaveData:userSaveData){
    const {userEmail, kind} = userSaveData;
    const postCol = collection(db, `psicodevlicos/${userEmail}/${kind}`);
    return getDocs(postCol).then((resp:any) => {
        const returnList = resp.docs.map((doc:any) => { return { id: doc.id, ...doc.data() } });
        return returnList;
    });
}

async function upcreate(userSaveData:userSaveData, data:any){
    
    try {
        const params = data;

        if (params.id) {
            return update(userSaveData, params, params.id);
        }
        return post(userSaveData, params);
    } catch (error) {
        throw error;
    }
}

async function remove(userSaveData:userSaveData, id:string){
    const {userEmail, kind} = userSaveData;
    const removeItem = doc(db, `psicodevlicos`, userEmail, kind, id)
    return deleteDoc(removeItem).then((resp:any) => {
        return resp 
    });
}

async function post(userSaveData:userSaveData, data:object) {
    const {userEmail, kind} = userSaveData;

    const _post = collection(db, `psicodevlicos/${userEmail}/${kind}`)
    return addDoc(_post, data).then((resp:any) => {
        return { ...data, id: resp.id }
    }).catch(err=>{
        console.log('erro ao atualizar os dados! ', err)
        throw err;
        
    })
}

async function update(userSaveData:userSaveData, data:object, id:string){
    const {userEmail, kind} = userSaveData
    const _post = doc(db, `psicodevlicos`, userEmail, kind, id)
    return setDoc(_post, data)
}

export default {
    getById,
    getAll,
    upcreate,
    remove
}