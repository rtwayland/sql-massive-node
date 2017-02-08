const config = require('./config');
// Connect Massive
const massive = require("massive");
const connectionString = config.MASSIVE_URI;
const massiveInstance = massive.connectSync({connectionString : connectionString});
// Make DB available to export
module.exports = massiveInstance;
