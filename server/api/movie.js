const { baseURL: url } = require('../../axiosConfig')
const movies = require('../data/movies')

module.exports = function movie (req, res) {
  res.status(200).json(movies)
}
