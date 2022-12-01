const handleRequest = async (req, res, callback) =>{
    // let m = new model()
    let jres = {
        status: 200,
        message:'Data retrieved',
        data:[],
        stack:{},
        errorName:''
    }
    try {
        jres.data = await callback(req.body)  
    } catch (error) {
        jres.error=500
        jres.message=error.message
        jres.stack = error.stack
        jres.errorName = error.name 
    }
    res.json(jres)
} 

module.exports = handleRequest