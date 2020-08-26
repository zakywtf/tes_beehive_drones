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
let pass  = bcrypt.hashSync("1234"+process.env.SALT, 10)
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true });
// const d = new dep({
//     title:'super',
//     subtitle:'admin',
//     deriver:[],
// })
// d.save()

const x = new model({
    username:'admin',
    password:pass,
    first_name: 'Nova Zaky',
    last_name: 'Fathoni',
    address:'Tepus',
    telp:'083867810825',
    email:'zakywtf@gmail.com',
    role:1
})
x.save()

model.find({},(err,resp)=>{
    console.log(resp, err, 'findone');
})


 