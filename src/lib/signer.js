import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import users from '../schema/users'
import {createSession} from '../lib/sessionHandler';

const sign = async(body, userAgent) => {
    let user = await checkUser(body)
    const {email, password} = body
    // console.log({body,user});
    
    if(user){
        let payload = await createPayload(user)
        var tes = bcrypt.compareSync(password+process.env.SALT, user.password)
        
        if(bcrypt.compareSync(password+process.env.SALT, user.password)) {
            var token = await createToken(payload)
            return await createSession(token)
        }else{
            throw new Error('Wrong password!')
        }
    }else{
        throw new Error('User not found!')
    }
}

const createToken = async(payload) => {
    return new Promise((resolve,rej)=>{
        jwt.sign({ payload }, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '1h'}, function(err, token) {
            if (err) {
                rej(err)
            }
            else { 
                resolve(token)
             }
        })   
    })
}

const checkUser = async(body) => {
    return await users.findOne({ email: body.email })
}

const createPayload = async(user) => {
    return {
        id:user.id,
        name:user.name,
        level:user.level,
        email:user.email
    }
}

module.exports={
    sign
}