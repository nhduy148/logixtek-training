const fs = require("fs");
var path = require('path');
const fileURL = (path.join(__dirname, '../data/data.json'));

const data = require(fileURL);

const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;    
    const skip = limit * (page - 1);
    const total_data = data.length;
    const total_page = Math.ceil(total_data / limit) || 1;
    const has_next_page = page + 1 <= total_page ? true : false;
    const has_prev_page = page - 1 > 0 ? true : false;
    const next_page = has_next_page ? page + 1 : null;
    const prev_page = has_prev_page ? page - 1 : null;

    const newData = page === 1 ? [...data].splice(0, limit) : [...data].splice(skip, limit);
    
    res.json({
        total_data, page, limit, total_page, has_next_page, has_prev_page, next_page, prev_page, data: newData
    });  
});

router.get('/item/:id', (req, res, next) => {    
    const ID = req.params.id;
    const item = data.filter( item => item.id == ID );
    
    res.json(item[0]);  
});

router.put('/item/:id', (req, res, next) => {  
    const ID = req.params.id;
    const clonedData = [...data]
    objIndex = clonedData.findIndex((obj => obj.id == ID));
    const oldHP = clonedData[objIndex].highest_price;
    const newHP = Number(req.body.highest_price);
    
    if( newHP <= oldHP ) {
        res.send({ status: false, statusText: "Pid must be higher than the current highest price" })
    } else {
        clonedData[objIndex].highest_price = newHP;
    
        fs.writeFile(fileURL, JSON.stringify(clonedData), function writeJSON(err) {
            if (err) res.send({ status: false, statusText: err })
            else res.send({ status: true, statusText: "Success", item: clonedData[objIndex] });  
        });
    }
});

module.exports = router;
