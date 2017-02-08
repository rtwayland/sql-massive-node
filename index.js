const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const port = config.port;
// Controllers
const mainCtrl = require('./controller');
// Body Parser
app.use(bodyParser.json());

app.get('/api/products', mainCtrl.getAll);
app.get('/api/products/:id', mainCtrl.getProduct);

app.post('/api/products', mainCtrl.create);

app.put('/api/products/:id', mainCtrl.update);

app.delete('/api/products/:id', mainCtrl.delete);

// Listen
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
