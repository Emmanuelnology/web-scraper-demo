import {appendFile} from 'fs';

export class Log {

error(err:Error) {
    this.logMessageToConsole(false, err.message);
    //this.writeLog(true, err.message);
}

success(message:string) {
    this.logMessageToConsole(true, message);
}

private writeLog(isSuccess:boolean, message:string) {
    let now = new Date();
    let type = (isSuccess) ? 'SUCCESS':'ERROR';
    let line = '"' + type + '","' + now.toISOString() + '","' + message + '"\n';
    appendFile('log.txt', line, (err) => {
        if (err) {
            throw err;
        }
      });
}

private logMessageToConsole(isSuccess:boolean, message:string) {
    let now = new Date();
    let type = (isSuccess) ? 'SUCCESS':'ERROR';
    let color = (isSuccess) ? '\x1b[32m':'\x1b[31m';
    console.log(color + type + ': ' + now.toISOString() + ' - ' + message + "\x1b[0m");
}

}