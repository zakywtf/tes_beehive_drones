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
        const {tags}=req.query
        const qry = {
            deleted:0,
            author:mg.Types.ObjectId(udata.id),
            tags:{$elemMatch:{category_id:mg.Types.ObjectId(tags)}}
        }
        if(udata.level>5){
            return await model.paging(perPage, (((page-1) * perPage)), {deleted:0}, {createdAt:-1});
        }else{
            if(tags){
                return await model.paging(perPage, (((page-1) * perPage)), qry, {createdAt:-1});
            }else{
                return await model.paging(perPage, (((page-1) * perPage)), {deleted:0, author:mg.Types.ObjectId(udata.id)}, {createdAt:-1});
            }
        }
    })
})

module.exports = rtr