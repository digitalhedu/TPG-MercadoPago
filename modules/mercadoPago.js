const mercadopago = require('mercadopago')
const credential = process.env.MP || "TEST-3645381466893064-070611-351447983b87f23645ba15f728ce6668-157889446"
let server = process.env.SERVER || "http://localhost:3030"
const feedback = `${server}/checkout/feedback`

const mp  = async (items,cuotes,shipping) => {
    try {
        
        mercadopago.configure({access_token: credential});
        let preference = {
            items: items.map(item => {
                return Object(
                    {
                        "title": item.name,
                        "currency_id": "ARS",
                        "picture_url": `${server}/${item.image}`,
                        "quantity": item.quantity,
                        "unit_price": item.price
                    }
                )
            }),
            "back_urls": {
                "success": feedback,
                "failure": feedback,
                "pending": feedback
            },
            "auto_return": "approved",
            "statement_descriptor": "DH Shop",
            payment_methods:{
                installments:cuotes
            },
            shipments:{
                cost: shipping,
                mode: "not_specified",
            }
        };
        return await mercadopago.preferences.create(preference) 

    } catch (error) {
        throw new Error(error)
    }
}
module.exports = mp