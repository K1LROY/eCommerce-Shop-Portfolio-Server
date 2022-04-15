var admin = require("firebase-admin");

var serviceAccount = require("../config/ecommerce-again-92efc-firebase-adminsdk-lrokf-b14563ad88.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
