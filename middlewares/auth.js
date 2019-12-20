const authMiddleware = {
  mustLogin:function(req,res,next){
    if(!res.locals.isLogin){
      res.redirect('/admin/login')
      return
    }
    next();
  },

  mustRoot:function(req,res,next){
    console.log(res.locals,12312312341)
    if(res.locals.userInfo.role == 2){
      res.writeHead(403);
      res.end("403 forbidden");
      return
    }
    next()
  }
}
module.exports = authMiddleware