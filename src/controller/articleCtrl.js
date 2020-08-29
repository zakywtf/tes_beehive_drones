import {controller} from '../classes/classController';
import m from '../model/articleModel'
import handleRequest from '../lib/ctrlHandler'
import mg from 'mongoose';

let model = new m()
let rtr = controller(model)

rtr.get('/pagination/:page/:perPage',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        const udata = res.locals.udata.payload
        const {page, perPage}=req.params;
        if(udata.level>5){
            return await model.paging(perPage, (((page-1) * perPage)), {}, {createdAt:-1});
        }else{
            return await model.paging(perPage, (((page-1) * perPage)), {author:mg.Types.ObjectId(udata.id)}, {createdAt:-1});
        }
    })
})

module.exports = rtr