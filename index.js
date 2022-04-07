const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
  switch (req.url){
      case '/welcome' : welcome(res); break;
      case '/' : home(res);break;
      default: res404(res);
  }
})

const welcome = res =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/json')
    res.write(JSON.stringify({
        status:'successfully',
        message: 'Welcome to MERN class',
        study: 'Node Js',
        loginAt: moment()
    }));
    res.end();
}

const res404 = res =>{
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/json')
    res.write(JSON.stringify({
        status:'failed',
        message: 'Resources Not Found'
    }));
    res.end();
}

const home = res =>{
    res.end('<h1>Home Page</h1>');
}

server.listen(3000, () => console.log('Server running at http://127.0.0.1:3000'));
