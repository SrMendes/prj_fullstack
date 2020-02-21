module.exports = (app) => {
    app.post('/register',(req, res)=>{
        res.send({
            message: "Usuário registrado!"
        })
    })
}