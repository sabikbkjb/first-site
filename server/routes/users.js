var mongoose = require("mongoose");
// const plm = require("passport-local-mongoose");
 
const userschema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
     
  },

  password: {
    type: String,
    required:true,
    
  },
});
// userschema.plugin(plm);
module.exports = mongoose.model("user", userschema);