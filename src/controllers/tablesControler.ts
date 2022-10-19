import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

async function registerTables(req: Request, res: Response) {
  try {
    const user = await prisma.tables.create({
      data: {
        number: req.body.number,
        status: req.body.status,
        client_name: req.body.client_name,
        time: req.body.time,
      },
    })
    return res.status(201).send({ msg: 'User created Sucessfuly!!', user })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAllTables(req: Request, res: Response) {
  try {
    const data = await prisma.tables.findMany()

    return res.status(200).send( data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}


async function getReservedTables(req: Request, res: Response) {
  try {
    const data = await prisma.tables.findMany({
      where:{status: req.body.status}
    })
    return res.status(200).send( data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function updateTables(req: Request, res: Response) {
  try {
    await prisma.tables.update({
      where: { id: req.params.id },
      data: {
        status: req.body.status,

      },
    })

    return res.status(200).send({ msg: 'Table updated!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function deleteTables(req: Request, res: Response) {
  try {
    await prisma.tables.delete({
      where: { id: req.params.id },
    })

    return res.status(200).send({ msg: 'Table Deleted!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default {  registerTables, getReservedTables, getAllTables, deleteTables, updateTables}
