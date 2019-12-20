module.exports = function(req,res,next){
  res.locals.seo = {
    title:'Express',
    keywords:'Express、Nodejs',
    description:'combat-crm'
  }
  next();
}