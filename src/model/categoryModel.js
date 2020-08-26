import Models from '../classes/classModel';
import sch from '../schema/category';

class categoryModel extends Models{
    constructor(){
        super(sch)
    }

}

module.exports=categoryModel