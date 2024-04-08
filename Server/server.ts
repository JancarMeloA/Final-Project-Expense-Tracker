import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
const app = express();
const cors = require('cors');
app.use(bodyParser.json())
const port = 3001; // Puerto en el que escuchará el servidor Express
app.use(cors())

interface Transaction{
  id: string
  transaction: Array<object>
}


const newttransaction: Transaction[] = []
app.post('/transactions', (req: Request, res:Response) => {
  newttransaction.push(req.body)

 return res.send(newttransaction)
});


app.get('/transactions', (req: Request, res:Response) => {
  res.send(newttransaction)
});

app.delete("/transaction/:id",(req: Request,res: Response)=>{
 const Id:string = req.params.id
 const Index = newttransaction.findIndex((transaction)=> transaction.id == Id)
  if(Index !== -1 ){
    newttransaction.splice(Index ,1)
    res.status(200).send("fue eliminado exitosamente");
  }
  

})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
