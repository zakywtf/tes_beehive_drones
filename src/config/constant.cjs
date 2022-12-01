require('dotenv').config()

const smtp={
    host:'smtp.googlemail.com',
    port:465,
    secure:true,
    auth:{
        user:process.env.SMTP_EMAIL,
        pass:process.env.SMTP_PASS
    },
    tls:{
        rejectUnauthorized: false
    },
    sender:'"Email from admin" <zakywtf@gmail.com>'
}

module.exports={
    smtp
}