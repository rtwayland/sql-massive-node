const db = require('./massive');

// Init Table if doesn't exist
db.init.createProductsTable([], (err, results) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Initialized Products Table');
    }
});

module.exports = {
    create(req, res) {
        db.product.create_product([
                req.body.name,
                req.body.description,
                req.body.price,
                req.body.imageUrl
            ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    getAll(req, res) {
        db.product.read_products([],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    return res.status(200).send(results);
                }
            });
    },
    getProduct(req, res) {
        db.product.read_product([req.params.id],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    if (results.length === 0) {
                        return res.status(404).send('No product found')
                    }
                    return res.status(200).send(results[0]);
                }
            });
    },
    update(req, res) {
        db.product.update_product([
                req.params.id,
                req.body.name,
                req.body.description,
                req.body.price,
                req.body.imageUrl
            ],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    if (results.length === 0) {
                        return res.status(404).send('No product found')
                    }
                    return res.status(200).send(results[0]);
                }
            });
    },
    delete(req, res) {
        db.product.delete_product([req.params.id],
            (err, results) => {
                if (err) {
                    console.error(err);
                    return res.send(err);
                } else {
                    if (results.length === 0) {
                        return res.status(404).send('No product found')
                    }
                    return res.status(200).send(`${results[0].name} has been deleted.`);
                }
            });
    }
}
