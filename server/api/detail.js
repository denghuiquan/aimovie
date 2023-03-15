const videos = require('../data/videos')

module.exports = function detail (req, res) {
  const id = req.query.id
  // 这里应该利用封装的方法操作数据库获取数据或者请求远端API获取
  const video = videos.find(video => video.id === id)
  res.status(200).send(video)
}
