const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mastrovitiseba:mastrolab123@ds139951.mlab.com:39951/mastrotodoapp');
//
//'mongodb://localhost:27017/TodoApp'
module.exports = { mongoose };
