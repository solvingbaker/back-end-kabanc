const express = require("express");
const bcrypt = require('bcrypt');
const axiosConfig = require('../helpers/axios-config');

const router = express.Router();

router.get("/login", (req, res) => {
  try {
    const datos = req.body;
    res.json({ mensaje: "Login successful", datos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/register", async (req, res) => {

  try {
    const { username, institution, password, id_link } = req.body;

    if (username.length < 4) {
      return res.status(400).json({ error: 'The username must have 4 characteres.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {username, institution, hashedPassword, id_link}

    const response = await axiosConfig.post(`/links/`, user);
    user.id_link = response.data.id;

  res.status(201).json({ message: 'User register successful.', user });
  } catch (error) {
    console.error('Error to register to the user:', error.message);
    res.status(500).json({ error: error.message });
  }
});


router.get("/accounts", async (req, res) => {
  const page = req.query.page;
  const link = req.query.link;

  try{
  
  const response = await axiosConfig.get(`/accounts/?page=${page}&link=${link}`);

  res.json({data: response.data});
  } catch (error) {
  
  res.status(500).json({ error: error.message });
  }
});

router.get("/accounts/:id", async (req, res) => {
  const id = req.params.id;  
  try{
 
  const response = await axiosConfig.get(`/accounts/${id}`);

 
  res.json({data: response.data});
  } catch (error) {

  c
  res.status(500).json({ error : error.message });
  }
});


module.exports = router;
