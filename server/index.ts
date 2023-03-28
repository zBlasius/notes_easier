import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/get_test', (req, res) => {
  const data = req.query || {};
  return res.status(200).json({ok:data});
});

app.post('/post_test', (req,res)=>{
  const data = req.body || {};
  return res.status(200).json({ok:data})
})

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
