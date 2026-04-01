import { Router } from "express"
import { body } from "express-validator"
import { createProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

//Routing
router.get('/', (req, res) => {
  res.json('Desde GET')
})

router.post('/', 
  //Validación
  body('name')
    .notEmpty().withMessage('Product name cannot be empty'),
  body('price')
    .isNumeric().withMessage('Invalid value')
    .notEmpty().withMessage('Product price cannot be empty')
    .custom(value => value > 0).withMessage('Invalid price'),
  handleInputErrors,
  createProduct
)

router.put('/', (req, res) => {
  res.json('Desde PUT')
})

router.patch('/', (req, res) => {
  res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
  res.json('Desde DELETE')
})

export default router