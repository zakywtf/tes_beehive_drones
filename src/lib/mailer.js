import nodemailer from 'nodemailer'
import {smtp} from '../config/constant'

const Mailer = nodemailer.createTransport(smtp)
const sendMail = async(mail)=>{
    if(!mail.from) mail.from=smtp.sender
    return await Mailer.sendMail(mail)
}

module.exports={Mailer, sendMail}