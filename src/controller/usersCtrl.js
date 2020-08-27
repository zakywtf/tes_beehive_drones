import {controller} from '../classes/classController';
import m from '../model/userModel'
import {getSession} from '../lib/sessionHandler';
import handleRequest from '../lib/ctrlHandler'
import {changePass} from '../lib/updatePassword';

let model = new m()
let rtr = controller(model)

rtr.get('/check_online/:id',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        var {id} = req.params
        return await getSession(id);
    })
})

rtr.post('/change_pass',async(req, res)=>{
    handleRequest(req, res, async (body)=>{
        const udata = res.locals.udata.payload
        await changePass(body, udata)
        return true
    })
})


module.exports = rtr