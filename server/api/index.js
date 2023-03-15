const swiper = require('./swiper')
const movie = require('./movie')
const videos = require('./videos')
const detail = require('./detail')

const express = require('express')
const router = express.Router()
const apis = { swiper, movie, videos, detail }
Object.keys(apis).forEach(api => {
  console.log(api, apis[api])
  router.get(`/${api}`, apis[api])
})
// Route with middleware

// Export the router
module.exports = router
