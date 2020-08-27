import users from '../schema/users';
import bcrypt from 'bcryptjs'

const changePass = async (body, udata) => {
    const {oldPass, newPass} = body
    const user = await checkUser(udata)
    const compare = bcrypt.compareSync(oldPass+process.env.SALT, user.password)
    console.log({user,body,udata,compare});

    if(compare){
        const passNew  = bcrypt.hashSync(newPass+process.env.SALT, 10)
        user.password = passNew
        user.save()
    }else{
        throw new Error("Old password is wrong!")
    }

}

const checkUser = async(udata) => {
    return await users.findById(udata.id).exec();
}

module.exports ={
    changePass
}