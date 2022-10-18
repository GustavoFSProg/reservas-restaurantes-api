/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/no-explicit-any

async function getReservedTables(req: Request, res: Response) {
  try {
    const tables = await prisma.tables.findMany({
      where: { status: 'reservada' },
    })
    if (!tables) return res.json({ msg: 'not exists' })

    return res.status(201).send({ msg: 'User created Sucessfuly!!', tables })
  } catch (error) {
    return res.status(201).send({ msg: 'User created Sucessfuly!!', error })
  }
}

async function getFreeTables(req: Request, res: Response) {
  try {
    const tables = await prisma.tables.findMany({
      where: { status: 'liberada' },
    })
    if (!tables) return res.json({ msg: 'not exists' })

    return res.status(201).send({ msg: 'User created Sucessfuly!!', tables })
  } catch (error) {
    return res.status(201).send({ msg: 'User created Sucessfuly!!', error })
  }
}

async function registerReservas(req: Request, res: Response) {
  // if ( ! await getReservedTables()) return res.json({msg: "Not reerves tables"})

  async function updateTables(id_table: any) {
    // try {
    await prisma.tables.update({
      where: { id: id_table },
      data: {
        status: req.body.status,
      },
    })

    // return res.status(200).send({ msg: 'Table updated!!' })
    // } catch (error) {
    //   return res.status(400).send({ error })
    // }
  }

  // async function verifyReservs(req: Request, res: Response) {
  //   const dataReserv = await prisma.tables.findFirst({
  //     where: { id: req.body.table_id },
  //   })

  //   if (dataReserv?.status === 'reservada') return res.json({ msg: 'Mesa reservada!!' })
  // }

  try {
    const dataReserv = await prisma.tables.findFirst({
      where: { id: req.body.table_id },
    })

    if (dataReserv?.status === 'reservada') return res.json({ msg: 'Mesa reservada!!' })

    const table = await prisma.reservas.create({
      data: {
        table_number: req.body.table_number,
        table_id: req.body.table_id,
        client_name: req.body.client_name,
        date: req.body.date,
        fone: req.body.fone,
      },
    })

    updateTables(req.body.table_id)

    return res.status(201).send({ msg: 'User created Sucessfuly!!', table })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAllReservas(req: Request, res: Response) {
  try {
    const data = await prisma.reservas.findMany()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getReservedReservas(req: Request, res: Response) {
  try {
    const data = await prisma.reservas.findMany({
      // where:{status: req.body.status}
    })
    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function updateReservas(req: Request, res: Response) {
  try {
    await prisma.reservas.update({
      where: { id: req.params.id },
      data: {
        table_number: req.body.table_number,
        table_id: req.body.table_id,
        client_name: req.body.client_name,
        date: req.body.date,
        fone: req.body.fone,
      },
    })

    return res.status(200).send({ msg: 'Table updated!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function deleteTables(req: Request, res: Response) {
  try {
    await prisma.reservas.delete({
      where: { id: req.params.id },
    })

    return res.status(200).send({ msg: 'Table Deleted!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default {
  registerReservas,
  getReservedReservas,
  getAllReservas,
  updateReservas,
  deleteTables,
  getReservedTables,
  getFreeTables,
}
