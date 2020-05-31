var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create("cats", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColvals, condition, cb) {
        orm.updateOne("cats", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

mocule.exports = burger;