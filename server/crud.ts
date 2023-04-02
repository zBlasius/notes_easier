import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, addDoc, setDoc, deleteDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: process.env.apiId,
    authDomain: "psicodevelicos.firebaseapp.com",
    projectId: "psicodevelicos",
    storageBucket: "psicodevelicos.appspot.com",
    messagingSenderId: "318941583719",
    appId: process.env.apiId,
    measurementId: "G-JYSNCPGLKL"
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

/**
 * @interface dataToSave
 * @property {string} key - Chave no banco.
 * @property {string} value - Valor para ser alterado.
 * @property {string} id - Id do registro.
 */
interface dataToSave{
    key: string,
    value: string,
    id?: string,
}

function getById(entity:string){
    const citiesCol = collection(db, entity);
    return getDocs(citiesCol).then(resp => {
        const returnList = resp.docs.map(doc => doc.data());
        return returnList;
    });
}

function getAll(userSaveData:userSaveData){
    const {userEmail, kind} = userSaveData;
    const postCol = collection(db, `psicodevlicos/${userEmail}/${kind}`);
    return getDocs(postCol).then(resp => {
        const returnList = resp.docs.map(doc => { return { id: doc.id, ...doc.data() } });
        return returnList;
    });
}

function upcreate(userSaveData:userSaveData, data:dataToSave){
    const params = data;

    if (params.id) {
        return update(userSaveData, params, params.id);
    }
    return post(userSaveData, params);
}

function remove(userSaveData:userSaveData, id:string){
    const {userEmail, kind} = userSaveData;
    const removeItem = doc(db, `psicodevlicos`, userEmail, kind, id)
    return deleteDoc(removeItem).then(resp => {
        return resp 
    });
}

function post(userSaveData:userSaveData, data:dataToSave) {
    const {userEmail, kind} = userSaveData;

    const _post = collection(db, `psicodevlicos/${userEmail}/${kind}`)
    return addDoc(_post, data).then(resp => {
        return { ...data, id: resp.id }
    })
}

function update(userSaveData:userSaveData, data:dataToSave, id:string){
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