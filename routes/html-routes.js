const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.joing(__dirname, '../public/index.html'))
});

module.exports = router;