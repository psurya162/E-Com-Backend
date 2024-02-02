const Route = require('express').Router()
const {data } =require('./Store')

Route.get('/ecom',data)

module.exports={Route}