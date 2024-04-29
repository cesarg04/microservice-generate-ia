import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validate-fields.middleware";
import { getCurrentUser, loginUser, registerUser } from "../../controllers";
import { validate_jwt } from "../../middlewares/validate-jwt.middleware";

const router = Router()

router.post('/register', [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'Is not email').isEmail(),
    check('password', 'The min of the password is 8 letters or numbers').isLength({min: 8}),
    validateFields
], registerUser)

router.post('/login', [
    check('email', 'Is not email').isEmail(),
    check('password', 'The min of the password is 8 letters or numbers').isLength({min: 8}),
    validateFields
], loginUser)

router.get('/user', [
    validate_jwt,
], getCurrentUser)

export default router;