var http = require('http')
var url = process.argv[2]
var body = ''

http.get(url, function (response) {
    response.on('data', function (chunk) {
        body += chunk
    })
    response.on('end', function () {
        console.log(body.length)
        console.log(body)
    })
})

// B1 error message
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

//connection error message: connection refused
// const http = require('http');
// var b1 = require('b1');

// http.get(process.argv[2], function (response) {
//     response.pipe(b1(function (err, data) {
//         if (err)
//             return console.error(err)
//             data.dataToString()
//             console.log(data.length)
//             console.log(data)
//         }))
//     })