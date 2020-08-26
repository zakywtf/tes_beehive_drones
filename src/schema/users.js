let m =  require('mongoose')
let Schema = m.Schema
let sch = new m.Schema({
    password:String,
    name:String,
    email:String,
    level:Number,
    verified:{type:Boolean, default:false},
    createdBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'username name email' }, ref:'users'},
    createdAt:{type:Date, default:Date.now},
    deleted:{type:Number, default:0},
    deletedBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'username name email' }, ref:'users'},
    deletedAt:{type:Date},
})

sch.index({email:1},{unique:true})
sch.plugin(require('mongoose-autopopulate'))

module.exports = m.model('users',sch);