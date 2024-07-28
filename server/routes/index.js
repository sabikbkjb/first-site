var express = require('express');
var router = express.Router();
var user = require('./users')
var mongoose =require('mongoose')

// connection of mongodb
try {
  mongoose.connect(
    "mongodb+srv://sy9034431150:sahil123@firstd.vklel9n.mongodb.net/retdatas"
  );
  console.log("connected to mongodb")
} catch (error) {
  console.log(error)
}




/* GET home page. */
// router.get('/', function(req, res, next) {
//      res.render('index')
// });

router.post('/adduser',async function(req,res){
     const {username,password} = req.body
     const User = new user({
        username,
        password
     })
    //  localStorage.setItem('user',User)
    User.save()
     res.json(User)
    //  res.render('index')
})

module.exports = router;
