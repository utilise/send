module.exports = function send(path){
  return function(req, res){
    res.sendfile(path)
  }
}