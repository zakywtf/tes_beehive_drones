// import crypto from 'crypto';
// import {salt} from './src/config/constant'
let dotenv = require('dotenv')
dotenv.config()

let bcrypt=require('bcryptjs')
// let {salt, mongoUri} = require('./src/config/constant')

let mongoose =  require('mongoose');
let model = require('./src/schema/users')
// let dep = require('./src/schema/department')
// console.log(hashed, mongoUri);
let pass = "1234"
let email = "zakywtf@gmail.com"
let hash  = bcrypt.hashSync(pass+email+process.env.SALT, 10)
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true });
// const d = new dep({
//     title:'super',
//     subtitle:'admin',
//     deriver:[],
// })
// d.save()

const x = new model({
    password:hash,
    name: 'Nova Zaky Fathoni',
    email:email,
    level:10
})
x.save()

model.find({},(err,resp)=>{
    console.log(resp, err, 'findone');
})


 