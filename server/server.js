var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// setup default data sources
loopback.setDefaultDataSourceForType('db', {
  connector: loopback.Memory
});

loopback.setDefaultDataSourceForType('mail', {
  connector: loopback.Mail,
  transports: [
    {type: 'STUB'}
  ]
});

// auto attach data sources to models
loopback.autoAttach();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
