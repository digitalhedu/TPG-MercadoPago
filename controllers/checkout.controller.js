//const mp = require('mp');
module.exports = {
    // Step 8
    process: async (req,res) => {
        try {
            return res.send('Enviamos los datos a Mercado Pago')
        } catch (error) {
            return res.send(error)
        }
    },
    // Step 9
    feedback: (req, res) => {
        return res.send('Recibimos la respuesta de Mercado Pago')
    }
};