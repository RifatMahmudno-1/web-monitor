module.exports = function () {
  const Monitor = require('ping-monitor');

  const monitors = [new Monitor({
      website: `https://test-bot.rifatno1.repl.co/`,
      interval: 3, //minutes
      responseTime: 1000 //in ms
    }),
    new Monitor({
      website: 'https://web-monitor.rifatno1.repl.co',
      interval: 3, //minutes
      responseTime: 1000 //in ms
    })
  ]

  monitors.forEach(function (el) {
    let aaa = 0;
    el.on('error', function () {
      haha(`Error has occured in ${el.website}. Restarting..`)
    });

    el.on('timeout', function () {
      haha(`${el.website} has timed out. Restarting`);
    });

    function haha(aa) {
      aaa++;
      setTimeout(() => {
        if (aaa <= 10) {
          console.log(aa);
          el.restart();
        } else {
          console.log(`Maximum call time existed. Monitoring has stopped for ${el.website}`)
          el.stop()
        }
      }, 2000);
    }
  })
}
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

myMonitor.on('restart', function (error) {
  console.log('monitoring restarted');
});

myMonitor.on('timeout', function (error) {
  console.log('Timed out');
});
  */