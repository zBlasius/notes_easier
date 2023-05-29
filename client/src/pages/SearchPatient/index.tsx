import {useState, useContext} from "react";
import crud from '../../services/crud';
import { EmailContext } from '../../store/AuthContext';
import { GlobalContent } from '../../interfaces/interface';
import C_Button from "../../components/Button";
import C_TextField from "../../components/TextField";
import ButtonPatient from "../ButtonPatient";


import './styles.scss'

interface listPatient{

}

export default function SearchPatient(){
    const emailContext = useContext<GlobalContent>(EmailContext);
    const {email} = emailContext
    const [listPatient, setListPatient] = useState([
        {Name: "Gustavo"},
        {Name: "Bruna"},
        {Name: "Gula Gula"},
        {Name: "Bruno"},
        {Name: "Caio"},
        {Name: "Mateus"},
        {Name: "Jorge"},
    ]);
    const [search, setSearch] = useState("");
    const [filtredPatient, setFiltredPatient] = useState([
        {Name: "Gustavo"},
        {Name: "Bruna"},
        {Name: "Gula Gula"},
        {Name: "Bruno"},
        {Name: "Caio"},
        {Name: "Mateus"},
        {Name: "Jorge"},
    ]);
    const [newPatient, setNewPatient] = useState({Name:'', Age:0});

    async function getBackend(){
        let objSearch = {kind:'Teste', route: '/get_test'};
        const getData = await crud.get(objSearch, {email, name:'Blasius', age:39});
        console.log(getData);
    }
    
    async function postBackend(){
      let objSearch = {kind:'Teste', route: '/create_new_patient'};
      const postData = await crud.post(objSearch, {email, car:'Gol', color:'white'});
        console.log(postData);
      }

      function applySearch(name){ //! Blasius - melhorar, filtro não está 100%
        if(!name) return setSearch(name);
        const regex = new RegExp(`^${name}*`, "i");
        let _filtredPatient = listPatient.filter(item=> regex.test(item.Name));
        setFiltredPatient([..._filtredPatient]);
        setSearch(name);
      }

      async function createNewPatient(){
        let objPost = {kind:'Person', route: '/create_new_patient'};
        const postData = await crud.post(objPost, {email, objPost});
        console.log(postData);
      }

    return(
        <div className="patient-modal-main">
            <div className="patient-modal-in">
                <C_TextField placeholder="Search" value={search} onChange={(e)=> applySearch(e.target.value)}/>
            
                {filtredPatient.map(item=>(
                    <ButtonPatient patientName={item.Name}/>
                ))}
            </div>
            
            <div>
            
            <C_TextField placeholder="Nome" value={newPatient?.Name ?? ''} onChange={(e)=> {
                let _newPatient = {...newPatient};
                _newPatient.Name = e.target.value;
                setNewPatient({..._newPatient});
            }}/>
            
            <C_TextField placeholder="Idade" value={newPatient?.Age ?? ''} onChange={(e)=> {
                let _newPatient = {...newPatient};
                _newPatient.Age = e.target.value;
                setNewPatient({..._newPatient});
            }}/>
            
            <C_Button label="Adicionar" onClick={()=> createNewPatient()}/>
            </div>
        </div>
    )
}