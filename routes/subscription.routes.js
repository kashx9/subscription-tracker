import {Router} from 'express'

const subscriptionRouter = Router()

subscriptionRouter.get('/',(req,res)=>{
    console.log("GET ENDPOINTS HIT")
    res.send({title:'get all subscriptions'})
})

subscriptionRouter.get('/:id',(req,res)=>res.send({title:'get subscription details'}))

subscriptionRouter.post('/',(req,res)=>res.send({title:'create subscription'}))

subscriptionRouter.put('/:id',(req,res)=>res.send({title:'update subscription'}))

subscriptionRouter.delete('/',(req,res)=>res.send({title:'delete subscriptions'}))

subscriptionRouter.get('/user/:id',(req,res)=>res.send({title:'get user subscriptions'}))

subscriptionRouter.put('/:id/cancel',(req,res)=>res.send({title:'cancel subscriptions'}))

subscriptionRouter.get('/upcoming-renewals',(req,res)=>res.send({title:'get upcoming subscriptions'}))

export default subscriptionRouter