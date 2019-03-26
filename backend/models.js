const mongoose = require('mongoose');
const connect = 'mongodb://localhost/dojobook'; 

mongoose.connect(connect, {useNewUrlParser:true});

const UserSchema = mongoose.Schema({
    username: {
        type: String, 
        minlength: [3, ' username must be at least 3 characters'],
        required: [true, 'userame is required']
    },
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    post: { type: String }
}, { timestamps: true });

module.exports = { 
	User: mongoose.model('User', UserSchema)
}