import {appendFile} from 'fs';

export class Log {

error(err:Error) {
    this.logMessageToConsole('ERROR', '\x1b[31m', err.message);
    //this.writeLog('ERROR', '\x1b[31m', err.message);
}

success(message:string) {
    this.logMessageToConsole('SUCCESS', '\x1b[32m', message);
}

private writeLog(type:string, color:string, message:string) {
    let now = new Date();
    let line = '"' + type + '","' + now.toISOString() + '","' + message + '"\n';
    appendFile('log.txt', line, (err) => {
        if (err) {
            throw err;
        }
      });
}

private logMessageToConsole(type:string, color:string, message:string) {
    let now = new Date();
    console.log(color + type + ': ' + now.toISOString() + ' - ' + message + "\x1b[0m");
}

}