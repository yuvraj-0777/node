const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Whelcome everyone')
    }
    if(req.url === '/about') {
        res.end('Welcome to about page')
    }
    // else {
    //     res.end(`
    //     <h1>OOPS!</h1>
    //     <p>Can't find the page you are looking for</p>
    //     <a href="/">Home Page</a>
    //     `)
    // }
})

server.listen(3000)