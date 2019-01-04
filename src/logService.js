"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var Log = (function () {
    function Log() {
    }
    Log.prototype.error = function (err) {
        this.logMessageToConsole(false, err.message);
    };
    Log.prototype.success = function (message) {
        this.logMessageToConsole(true, message);
    };
    Log.prototype.writeLog = function (isSuccess, message) {
        var now = new Date();
        var type = (isSuccess) ? 'SUCCESS' : 'ERROR';
        var line = '"' + type + '","' + now.toISOString() + '","' + message + '"\n';
        fs_1.appendFile('log.txt', line, function (err) {
            if (err) {
                throw err;
            }
        });
    };
    Log.prototype.logMessageToConsole = function (isSuccess, message) {
        var now = new Date();
        var type = (isSuccess) ? 'SUCCESS' : 'ERROR';
        var color = (isSuccess) ? '\x1b[32m' : '\x1b[31m';
        console.log(color + type + ': ' + now.toISOString() + ' - ' + message + "\x1b[0m");
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=logService.js.map