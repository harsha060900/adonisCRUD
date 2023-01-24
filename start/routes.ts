/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
// Route.get('/disp', 'DetailsController.disp').middleware('auth')
Route.get('/disp/:id?', 'DetailsController.disp').middleware('auth')
Route.post('/create', 'DetailsController.ins').middleware('auth')
Route.put('/update', 'DetailsController.updt').middleware('auth')
Route.delete('/delete/:id', 'DetailsController.del').middleware('auth')

// CUSTOMER
Route.group(() => {
  Route.get('/:id?', 'EmployeesController.displayData')
  Route.post('/', 'EmployeesController.store')
  Route.put('/:id', 'EmployeesController.updt')
  Route.delete('/:id', 'EmployeesController.delete')
}).prefix('/employee').where('id', /^[0-9]+$/).middleware('auth')

Route.get('/add', 'ArithOP.add').middleware('auth')
Route.get('/sub', 'ArithOP.sub')
Route.get('/mul', 'ArithOP.mul')
Route.get('/div', 'ArithOP.div')
