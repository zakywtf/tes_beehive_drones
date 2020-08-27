let m =  require('mongoose')
let Schema = m.Schema
let sch = new m.Schema({
    name:String,//{ type: , required: true, unique: true, lowercase:true },
    createdBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    createdAt:{type:Date, default:Date.now},
    deleted:{type:Number, default:0},
    deletedBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    deletedAt:{type:Date},
    updatedAt:{type:Date, default:null},
})

sch.plugin(require('mongoose-autopopulate'))

module.exports = m.model('category',sch);