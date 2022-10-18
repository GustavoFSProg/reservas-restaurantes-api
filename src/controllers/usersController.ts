import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
// import md5 from 'md5' 

const prisma = new PrismaClient()

async function registerUser(req: Request, res: Response) {
  try {
    const user = await prisma.users.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        celular: req.body.celular,
      },
    })
    return res.status(201).send({ msg: 'User created Sucessfuly!!', user })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await prisma.users.findMany()

    return res.status(200).send( data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    await prisma.users.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        email: req.body.email,
        celular: req.body.celular,
      },
    })

    return res.status(200).send({ msg: 'User Deleted!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    await prisma.users.delete({
      where: { id: req.params.id },
    })

    return res.status(200).send({ msg: 'User Updated!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { registerUser, getAll, deleteUser, updateUser }
