const db = require('./massive');

// Init Table if doesn't exist
db.init.createAirplaneTable([], (err, results) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Initialized Airplane Table');
    }
});

module.exports = {
  create(req, res) {

  },
  getAll(req, res) {

  },
  getProduct(req, res) {

  },
  update(req, res) {

  },
  delete(req, res) {

  }
}
