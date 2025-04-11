const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const path = require('path');
const mainController = require('../controllers/mainController');

// Ruta para la página de inicio
router.get('/register', registerController.getRegisterPage);
router.get('/login', loginController.getLoginPage);
router.post('/register', registerController.register);
router.post('/login', loginController.login);
// Página principal (index.html)
router.get('/', mainController.getMainPage);
// Otras vistas HTML directamente
router.get('/perfiles', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/Perfiles.html'));
});

router.get('/clases', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/Clases.html'));
});

router.get('/precios', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/precios.html'));
});

router.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/Contacto.html'));
});

module.exports = router;