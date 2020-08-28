import Models from '../classes/classModel';
import sch from '../schema/article';
import moment from 'moment';

class articleModel extends Models{
    constructor(){
        super(sch)
        this.level=5
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

module.exports=articleModel