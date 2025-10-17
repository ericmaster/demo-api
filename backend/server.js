const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Por simplicidad (conexion a una BDD)
let items = [{ id: 1, name: 'Item 1' }];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(3001, () => console.log('Backend en puerto 3001'));
