import Models from '../classes/classModel.cjs';
import sch from '../schema/sallarys.cjs';
import moment from 'moment';
import m from 'mongoose';

class sallarysModel extends Models{
    constructor(){
        super(sch)
        this.level=10
    }

    async insert(obj){
        if(this.udata.payload.level!=this.level)throw Error('Access disable!')
        return await this.model.create(this.doConvertParam(obj))
    }

    doConvertParam(body){
        body.author = this.udata.payload.id, body.updatedAt = moment()
        return body
    }
}

module.exports=sallarysModel