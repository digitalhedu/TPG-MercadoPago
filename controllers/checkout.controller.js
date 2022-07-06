module.exports = {
    process: (req,res) => {
        return res.send('Enviamos los datos a Mercado Pago')
    },
    feedback: (req, res) => {
        return res.send('Recibimos la respuesta de Mercado Pago')
    }
};