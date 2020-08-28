import users from '../schema/users';
import bcrypt from 'bcryptjs'

const changePass = async (body, udata) => {
    const {oldPass, newPass} = body
    const {id, email} = udata
    const user = await checkUser(id)
    const compare = bcrypt.compareSync(oldPass+email+process.env.SALT, user.password)
    console.log({user,body,udata,compare});

    if(compare){
        const passNew  = bcrypt.hashSync(newPass+email+process.env.SALT, 10)
        user.password = passNew
        user.save()
    }else{
        throw new Error("Old password is wrong!")
    }

}

const checkUser = async(id) => {
    return await users.findById(id).exec();
}

module.exports ={
    changePass
}