import Models from '../classes/classModel';
import sch from '../schema/positions';

class positionsModel extends Models{
    constructor(){
        super(sch)
        this.level=10
    }

    async insert(obj){
        if(this.udata.payload.level<this.level)throw Error('Access disable!')
        return await this.model.create(this.doConvertParam(obj))
    }

    doConvertParam(body){
        body.createdBy = this.udata.payload.id
        return body
    }

}

module.exports=positionsModel