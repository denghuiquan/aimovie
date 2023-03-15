const { baseURL: url } = require('../../axiosConfig')
const videos = require('../data/videos')

module.exports = function video (req, res) {
  res.status(200).json(videos.map(video => video.id))
}
