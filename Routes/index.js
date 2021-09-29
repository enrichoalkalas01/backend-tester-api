const Express = require('express')
const Routes = Express.Router()

const Connection = require('../Models/Connection')
const Products = require('../Models/Products')
const ProductsModel = require('../Models/Products')

Connection()

Routes.get('/', (req, res) => {
    res.send({
        message: `Ini adalah index`,
        status: 200,
    })
})


Routes.get('/product-list/create', (req, res) => {

    for( let i = 0; i < 15; i++ ) {
        const Products = new ProductsModel({
            uid: 'admin',
            username: 'admin',
            productName: `product-${ i + 1 }`,
            description: `ini adalah description product ${ i + 1 }`,
            prices: Math.floor(Math.random() * 1000000),
            images: `images-products-${ i + 1 }.png`,
        })

        Products.save(Products).then(response => {
            if ( i !== 15 ) {
                return true
            } else {
                res.send('success')
            }
        }).catch(err => {
            console.log(err)
        })
    }
})

Routes.get('/product-list', (req, res) => {
    let PerPage = req.query.perpage !== undefined ? req.query.perpage : 3 // limit
    let Page = req.query.page !== undefined ? req.query.page : 0 // skip
    ProductsModel.find()
    .skip(Page * PerPage)
    .limit(Number(PerPage))
    .then(response => {
        res.send(response)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = Routes