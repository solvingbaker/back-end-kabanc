const routes = require('./routes/index');
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use('/', routes.links);
app.use('/', routes.accounts);
app.use('/', routes.institutions);
app.use('/', routes.transactions);


app.listen(port, () => {
  console.log(`Está escuchando en http://localhost:${port}`);
});