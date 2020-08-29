let m =  require('mongoose')
let Schema = m.Schema
let sch = new m.Schema({
    tags:[{
        category_id:{type: Schema.Types.ObjectId, autopopulate:{ select: 'id name' }, ref:'category'}
    }],
    title:String,
    article:String,
    deleted:{type:Number, default:0},
    deletedBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    deletedAt:{type:Date},
    updatedAt:{type:Date},
    updatedBy:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'},
    createdAt:{type:Date, default:Date.now},
    author:{type: Schema.Types.ObjectId, autopopulate:{ select: 'name email' }, ref:'users'}
})

sch.plugin(require('mongoose-autopopulate'))

module.exports = m.model('articles',sch);