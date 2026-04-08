import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

//Routing
router.get('/', getProducts)
router.get('/:id', 
  param('id').isInt().withMessage('Invalid ID'),
  handleInputErrors,
  getProductById
)

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

router.put('/:id', 
  //Validación
  body('name')
    .notEmpty().withMessage('Product name cannot be empty'),
  body('price')
    .isNumeric().withMessage('Invalid value, price has to be a number')
    .notEmpty().withMessage('Product price cannot be empty')
    .custom(value => value > 0).withMessage('Invalid price'),
  body('availability')
    .isBoolean().withMessage('Invalid value for availability'),
  handleInputErrors,
  updateProduct
)

router.patch('/:id', updateAvailability)

router.delete('/', (req, res) => {
  res.json('Desde DELETE')
})

export default router