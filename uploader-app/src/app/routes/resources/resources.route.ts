import { Router } from "express";
import { validate_jwt } from "../../middlewares/validate-jwt.middleware";
import { createResource, getResourceById, getResources } from "../../controllers";
import { check } from "express-validator";


const router = Router()

router.get('', [
    validate_jwt
], getResources)

router.post('', [
    validate_jwt,
    check('title', 'The title is required').not().isEmpty()
], createResource)

router.get('/:id', [
    check('id', 'This id is not UUID').isUUID(),
    validate_jwt
], getResourceById)

export default router;