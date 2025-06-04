import express from 'express'
const app = express()
app.use(express.json())

const PUERTO = 3000

app.get('/ping', (_req, res) => {
    console.log('alguien pingueó aquí!!')
    res.send('pong')
})

app.listen(PUERTO, ()=>{
    console.log('El servidor está corriendo en el puerto ', PUERTO)
})