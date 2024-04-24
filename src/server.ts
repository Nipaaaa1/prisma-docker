import express, { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'

const app = express()

const prisma = new PrismaClient()


app.get('/api/users/', async (req: Request, res: Response) => {
    const getAllUsers = {
        data: await prisma.user.findMany()
    }

    res.send(getAllUsers)
})

app.get('/*', (req: Request, res: Response) => {
    res.send('Please look at the documentation in Github.')
})

app.listen(3000, () => {
    console.log("server listening at port 3000")
})