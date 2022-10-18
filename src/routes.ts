import { Router, Request, Response } from 'express'
import reservsController from './controllers/reservsController'
import tablesControler from './controllers/tablesControler'
import usersController from './controllers/usersController'

const routes = Router()

routes.get('/', function (req: Request, res: Response) {
  return res.send({ msg: ` 🌄 Api Running` })
})


routes.get('/all', usersController.getAll)
routes.post('/register', usersController.registerUser)
routes.put('/update/:id', usersController.updateUser)
routes.delete('/delete/:id', usersController.deleteUser)

routes.get('/all-tables', tablesControler.getAllTables)
routes.get('/reserved-tables', tablesControler.getReservedTables)
routes.post('/register-tables', tablesControler.registerTables)
routes.put('/update-tables/:id', tablesControler.updateTables)
routes.delete('/delete-tables/:id', tablesControler.deleteTables)

routes.get('/all-reservs', reservsController.getReservedTables)
routes.get('/all-reservs', reservsController.getReservedTables)
routes.get('/all-reservas', reservsController.getAllReservas)
routes.post('/register-reservs', reservsController.registerReservas)



export default routes
