import Models from '../classes/classModel';
import sch from '../schema/article';

class articleModel extends Models{
    constructor(){
        super(sch)
    }

}

module.exports=articleModel