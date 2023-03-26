import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/blasius_test', (req,res)=>{
  res.status(400).json({ok:true})
})

app.listen(8000, () => {
  console.log('Server started on port 3000');
});
