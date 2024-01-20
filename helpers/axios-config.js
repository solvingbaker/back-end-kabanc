// axios-config.js
const axios = require('axios');

// Crear una instancia de Axios con configuraciones comunes
const instanciaAxios = axios.create({
  baseURL: 'https://sandbox.belvo.com/api/', 
  timeout: 5000, // Tiempo de espera para las solicitudes en milisegundos
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic NTdkODEzNjYtYTVlZi00YTRiLTliMDUtZTEwMjJmNjIyODVlOlhyQiM3b08wYVc4cVo1RWJTRGgjX0pUMVlVZzVuKiN5RWFOdnExMnltI0wzQzRBaW0tVnEwNGRBeVhRbmNqa3c=',
  },
});

module.exports = instanciaAxios;
