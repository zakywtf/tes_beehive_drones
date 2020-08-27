import Models from '../classes/classModel';
import sch from '../schema/users';
import bcrypt from 'bcryptjs';
import MAILER from '../lib/mailer';

class userModel extends Models{
    constructor(){
        super(sch)
        this.level=10
    }

    async getAll(){
        var udata = this.udata.payload
        console.log({udata:this.udata.payload});
        
        // if(udata.role != this.role)throw Error('You do not have access!')
        return await this.model.find({},this.getProjection())
    }

    async insert(obj){
        if(this.udata.payload.level<this.level)throw Error('Anda tidak punya akses untuk menambah data ini!')
        const pass = this.generateCode(6)
        await this.sendMail(obj, pass)
        return await this.model.create(this.doConvertParam(obj, pass))
    }

    async sendMail(body,pass){
        var html=this.html(body,pass)
        var mail= await MAILER.sendMail({
            to: body.email,
            subject:'Email Login System Portal Berita X',
            html:html
        });
    }

    doConvertParam(body, pass){
        body.createdBy = this.udata.payload.id,
        body.password = bcrypt.hashSync(pass+process.env.SALT, 10)
        return body
    }

    getProjection(){
        return 'name email level createdAt'
    }

    html(body,pass){
        var html = `<pre>Dear , <b>${body.name}</b>

Please using the User Identity and Password to Sign in 
Portal Berita X System,  details this below,

Email    : ${body.email}
Password : ${pass}

Best Regards
Admin
</pre>`;

        return html;
    }

    generateCode(length){
        var result           = '';
        var characters       = '0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

module.exports=userModel