import * as express from 'express';
import { VesoRouter } from './_routers/router';
import { db } from '@crud/database';
import { CreateTables } from '@crud/database'

const app = express();

db.authenticate()
  .then(() => console.log('Connected to Database...'))
  .catch(err => console.log('Error: ', err));
// CreateTables();

app.use(express.json());
app.use(VesoRouter);



const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
