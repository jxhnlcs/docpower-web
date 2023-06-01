import { Router } from "express";
import { UserController } from "./controllers/UserController.js";

const route = Router();

route.get('/api/', (req, res) => {
    return res.json({ success: true })
})

route.use('/api/vr', async (request, response, next) => {
    const token = request.headers.authorization ?? ''
    if (token == '') return response.status(401).json({ message: 'Acesso restrito' })
    const middleware = new ValidarUsuario
    const isValid = await middleware.validarToken(token)
    if (!isValid.success) return response.status(401).json({ message: isValid.message })
    next()
})

const userController = new UserController

route.post('/api/login', userController.Auth)
route.post('/api/register', userController.Register)


export { route }
