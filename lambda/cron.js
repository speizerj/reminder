var Firebase = require('firebase');
var env = require('node-env-file');
var Mailgun = require('mailgun').Mailgun;

//load env variables
env(__dirname + '/.env');

var firebaseUrl = process.env.FIREBASE_URL;
var secret = process.env.FIREBASE_SECRET;
var mailgunKey = process.env.MAILGUN_KEY;

var mg = new Mailgun(mailgunKey);

//load up firebase and authenticate as admin using secret key
var firebase = new Firebase(firebaseUrl);

firebase.authWithCustomToken(secret, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    readData();
  }
}, { remember: "sessionOnly" });

function readData() {

  var now = Date.now() / 1000;

  // find expired reminders
  firebase.on("value", function(snapshot) {
    //loop through all user keys
    snapshot.forEach(function(user) {
      //then through all reminders
      user.forEach(function(reminder) {
        //if expired, handle it
        if (reminder.val().timestamp < now) {
          handleExpiration(reminder.val(), user.key(), reminder.key());
        }
      })
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}


function handleExpiration(obj, userKey, reminderKey) {
  mg.sendText('jordanspeizer@gmail.com', obj.email, 'A Reminder from ReminderMe', obj.text, function(err) { err && console.log(err) });
  // var removeRef = new Firebase(firebaseUrl + '/' + userKey + '/' + reminderKey;
  // removeRef.remove();
}