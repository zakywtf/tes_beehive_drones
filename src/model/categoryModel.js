import Models from '../classes/classModel';
import category from '../schema/category';

class categoryModel extends Models{
    constructor(){
        super(category)
    }

}

module.exports=categoryModel