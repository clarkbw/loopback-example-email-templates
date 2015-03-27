/* jshint node: true, maxlen: 120 */
var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  if (app.dataSources.db.name !== 'Memory') { return; }
  var file = path.resolve(__dirname, '..', '..', 'client', 'email.html');
  var User = app.models.User;

  // clear out the email file
  fs.writeFile(file, '', { flag: 'w+' }, function (err) {
    if (err) { console.error(err); }
  });

  // demo trigger method to run the verify function
  User.trigger = function(to, from, subject, next) {
    var options = { type : 'email',
                    to : { address : to },
                    from : { address : from },
                    subject : subject,
                    cache: false };
    User.findOne({}, function (err, user) {
      // overwrite the current file
      fs.writeFile(file, '', { flag: 'w+' }, function (err) {
        if (err) { console.error(err); }
      });

      user.verify(options, function (err, result) {
        if (err) { console.error(err); }
        var msg = result.email.html.toString('utf-8');
        // write out the new email so it can be loaded in an iframe
        fs.writeFile(file, msg, { flag: 'w+' }, function (err) {
          if (err) { console.error(err); }
          next(null, result);
        });
      });
    });
  };

  app.loopback.remoteMethod(
    User.trigger,
    {
      accepts: [
        {arg: 'to', type: 'string', required: true},
        {arg: 'from', type: 'string', required: true},
        {arg: 'subject', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/trigger', verb: 'get'}
    }
  );

  // create a user we can play with
  var data = { id: 1,
               name: 'Bryan W Clark',
               email: 'clarkbw@example.com',
               password: '123456789'
              };
  User.upsert(data, function (err, user) {
    console.log('Created a default user', user);
  });
};
