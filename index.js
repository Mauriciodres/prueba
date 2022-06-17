const { PrismaClient } = require('@prisma/client')
const express = require('express')
const cors = require('cors')


const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())
app.get('/', async (req, res) => {
    const contacts = await prisma.informacion_contactos.findMany()
    res.json(contacts)
})
app.post('/crear', async (req, res) => {
    const contacto = await prisma.informacion_contactos.create({ data: req.body })
    res.json(contacto)

})
app.delete('/eliminar/:id', async (req, res) => {
    const ideliminar = await prisma.informacion_contactos.delete({

        where: {
            idinformacion: parseInt(req.params.id)
        }
        
    })
   res.json(ideliminar)
})
app.get('/mostrar/:id', async (req, res) => {
    const idmostrar1 = await prisma.informacion_contactos.findUnique({where:{idinformacion:parseInt(req.params.id)}})
    res.json(idmostrar1)

})
app.put('/actualizar/:id', async (req, res) => {
    const actualizarcontacto = await prisma.informacion_contactos.update({
        where:{idinformacion:parseInt(req.params.id)},
         data: req.body
    })
    res.json(actualizarcontacto)
})

const server = app.listen(4000, () =>
    console.log(' Server ready at: http://localhost:4000/')
)
