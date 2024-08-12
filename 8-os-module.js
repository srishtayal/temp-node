const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user);

//method retuns the system uptime in seconds
console.log(`The sytem uptime is : ${os.uptime()} seconds`)

const currOS = {
    name:os.type(),
    reslease:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currOS)