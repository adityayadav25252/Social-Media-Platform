import express from 'express'
import {registerController} from '../controller/auth.controller.js'


const routes = express.Router();

routes.post('/register',registerController)


export default routes