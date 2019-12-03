const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connext("mongodb://localhost/bookstore", {
    keepAlive: true,
    useMongoClient: true
});