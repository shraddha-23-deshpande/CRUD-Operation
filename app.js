var express = require('express');
var router = express.Router();
var app = express();
app.use(express.json());
var crud = require('./crudOp');
app.use('/crudOp', crud);
app.listen(5000, function () {
    console.log('server started');
});
module.exports = router;
