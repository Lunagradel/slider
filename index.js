var fs = require('fs')


fs.readFile('./package.json', 'utf8', function (err, data) {


    console.log("fejl: ", err)
    console.log("data: ", data)

})



