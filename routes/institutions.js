const express = require('express');
const router = express.Router();
const axiosConfig = require('../helpers/axios-config');

router.get("/institutions/", async (req, res) => {
    
    const page = req.query.page;
    const uuid = req.query.uuid;
    try{
    
    const response = await axiosConfig.get(`/institutions/?page=${page}`);
    
   
    const data = response.data.results.map(item => ({
        id: item.id,
        name: item.name,
        type: item.type,
      }));
    
   
    res.json({data : data});
    } catch (error) {
   
    res.status(500).json({ error: error.message });
    }
});


module.exports = router;