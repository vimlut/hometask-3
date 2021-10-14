const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
    res.status(200).send({
        message: 'Welcome to the Notes API!'
    })
);

module.exports = router;
