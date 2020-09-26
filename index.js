const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('I konw how to open node...YAY')
})



app.listen(3000, () => console.log('Listenting to port 3000'));