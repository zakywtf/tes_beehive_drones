let m =  require('mongoose')
let Schema = m.Schema
let sch = new m.Schema({
    basic_sallary:{type: Number, default: 0},
    allowance: {type: Number, default: 0},
    payday:{type:Date},
    notes: String,
    employee_id:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name' }, ref:'employees'},
    createdBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    createdAt:{type:Date, default:Date.now},
    deleted:{type:Number, default:0},
    deletedBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    deletedAt:{type:Date},
})

sch.plugin(require('mongoose-autopopulate'))

module.exports = m.model('sallarys',sch);