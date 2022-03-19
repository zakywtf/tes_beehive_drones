let m =  require('mongoose')
let Schema = m.Schema
let sch = new m.Schema({
    code:String,
    name:String,
    createdBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    createdAt:{type:Date, default:Date.now},
    deleted:{type:Number, default:0},
    deletedBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    deletedAt:{type:Date},
})

sch.plugin(require('mongoose-autopopulate'))

module.exports = m.model('positions',sch);