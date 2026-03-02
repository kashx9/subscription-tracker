import {Router} from 'express'
import { sendReminder } from '../controllers/workflow.controller.js'

const workflowRouter = new Router()

workflowRouter.post('/subscription/reminder', sendReminder)

export default workflowRouter