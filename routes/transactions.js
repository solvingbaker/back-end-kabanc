const express = require('express');
const router = express.Router();
const axiosConfig = require('../helpers/axios-config');

router.get("/transactions/", async (req, res) => {
    
    const page = req.query.page;
    const link = req.query.link;
    try{
    
    const response = await axiosConfig.get(`/transactions/?page=${page}&link=${link}`);
    
      
    res.json({data : response.data});
    } catch (error) {
   
    res.status(500).json({ error: error.message });
    }
});

module.exports = router;