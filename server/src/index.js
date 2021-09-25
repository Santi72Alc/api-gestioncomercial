const express = require('express');

const app = express();


// middlewares
app.use(express.json())


app.use('/info', (req, res) => {
    res.json({
        ok: true,
        message: {
            title: 'Gestión Comercial (API)',
            info: 
            `Gestión de presupuestos para clientes.\nUrl API base: /APIv1`,
            programmer: 'Veras Rubio & Santiago San Román',
            copyright: `${new Date().getFullYear()}`
        }
    })
}) 



const PORT = process.env.PORT || 3001;
app.listen(PORT,() => console.log(`Server up and listenning at port ${PORT}`))

