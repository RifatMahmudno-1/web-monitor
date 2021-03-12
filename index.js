const http = require('http');
const Monitor = require('ping-monitor');


const port = 3000;
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write("Keep Alive! Don't die.");
  res.end();
}).listen(port);

const monitors = [new Monitor({
    website: `https://Test-Bot.rifatno1.repl.co`,
    interval: 1, //minutes
    responseTime: 1000 //in ms
  }),
  new Monitor({
    website: 'https://google.com',
    interval: 1, //minutes
    responseTime: 1000 //in ms
  })
]
monitors.forEach(function (el) {
  el.on('error', function (error) {
    console.log('error has occured');
    el.stop();
  });
  el.on('stop', function (website) {
    console.log(el.website + `'s` + ' monitor has stopped.');
  })
})

//for additional changes
/*confing: {
    intervalUnits: 'minutes' // seconds, milliseconds, minutes {default}, hours
  },*/

/*
  myMonitor.on('up', function (res, state) {
    console.log('Yay!! ' + res.website + ' is up.');
});


myMonitor.on('down', function (res) {
    console.log('Oh Snap!! ' + res.website + ' is down! ' + res.statusMessage);
});


myMonitor.on('stop', function (website) {
    console.log(website + ' monitor has stopped.');
});

myMonitor.on('error', function (error) {
  console.log('error has occured');
});
  */