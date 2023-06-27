import express from 'express';
import cors from 'cors';
const app = express();
import { Person } from './src/Routes/person'

app.use(express.json());
app.use(cors());
// * TODO - Fazer middleware para pegar o usuário corretamente

function getUserEmail(data){
  let email
  
  data.email 
    ? email = data.email
    : email = '';

  return email
}

app.get('/list_all_person', async (req,res)=>{
  try {
    console.log('entrou aqui') 
    const person = new Person('gustavo.blasius@clinicorp.com');
    const allPersonList = await person.getAllPerson();
    return res.status(200).json(allPersonList);
  } catch (error) {
    console.log('deu ruuim aqui')
    return res.json(400).json({error: true, message: error})
  }
})

app.get('/get_test', async (req, res) => {
  // const data = req.query || {};
  // const userEmail = getUserEmail(data);
  // delete data.email

  // const getData = await crud.getAll({userEmail, kind:'Teste'})
  // return res.status(200).json({ok:getData});
});

app.post('/post_test', async (req,res)=>{
  // const data = req.body || {};

  // const userEmail = getUserEmail(data);
  // delete data.email

  // try {
  //   const postData = await crud.upcreate({userEmail:userEmail, kind: 'Teste'}, data)
  //   return res.status(200).json(postData)

  // } catch (error) {
  //   console.log('error', error)
  //   return res.status(400).json(error)  
  // }
})

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
