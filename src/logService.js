"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var Log = (function () {
    function Log() {
    }
    Log.prototype.error = function (err) {
        this.logMessageToConsole('ERROR', '\x1b[31m', err.message);
    };
    Log.prototype.success = function (message) {
        this.logMessageToConsole('SUCCESS', '\x1b[32m', message);
    };
    Log.prototype.writeLog = function (type, color, message) {
        var now = new Date();
        var line = '"' + type + '","' + now.toISOString() + '","' + message + '"\n';
        fs_1.appendFile('log.txt', line, function (err) {
            if (err) {
                throw err;
            }
        });
    };
    Log.prototype.logMessageToConsole = function (type, color, message) {
        var now = new Date();
        console.log(color + type + ': ' + now.toISOString() + ' - ' + message + "\x1b[0m");
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=logService.js.map