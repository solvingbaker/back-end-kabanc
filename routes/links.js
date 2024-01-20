const express = require('express');
const router = express.Router();
const axiosConfig = require('../helpers/axios-config');


router.get("/register_link", async (req, res) => {
    try {
        const page = req.query.page;
        const uuid = req.query.uuid;
        
        const respuesta = await axiosConfig.get(`accounts/?page=${page}&uuid=${uuid}`);
    
       
        res.json({ datos: respuesta.data });
      } catch (error) {
       
        console.error('Error al realizar la solicitud:', error.message);
        res.status(500).json({ error: error.message });
      }
});


module.exports = router;