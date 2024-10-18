const { addUserController, showHome, showForm, showConfirm} = require('../controllers/user.controller');
    const router = require('express').Router();
    router.get('/', showHome); //renderizar página principal
    router.get('/form', showForm); //renderizar página de formulario
    router.post('/submit', addUserController); //procesar datos formulario
    //router.get('/confirm', showConfirm); //página de confirmacion
    module.exports = router;