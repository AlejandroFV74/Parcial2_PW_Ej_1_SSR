const { addNewUser } = require('../services/user.service');

const addUserController = (req, res) => {
    try {
        const { name, age, email } = req.body;
        
        //variable para comunicarme con el confirmation.pug y mandar posible error
        const errors = [];

        // Validación del nombre
        const validNameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!validNameRegex.test(name)) {
            errors.push('Por favor, ingresa un nombre válido');
        }

        // Validación de la edad
        if (isNaN(age) || age <= 0) {
            errors.push('Por favor, ingresa una edad válida (número positivo)');
        }

        // Validación del correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Por favor, ingresa un correo electrónico válido');
        }

        // Si hay errores, renderizar nuevamente con mensajes de error
        if (errors.length > 0) {
            return res.status(400).render('form.pug', { errors, name, age, email });
        }

        const user = addNewUser({ name, age, email });

        res.render('confirmation.pug', { user});
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}
const showHome = (req, res) => {
    res.render('home.pug');
}

const showForm = (req, res) => {
    res.render('form.pug')
}

const showConfirm = (req, res) => {
    res.render('confirmation.pug')
}




module.exports = {
    addUserController,
    showHome,
    showForm,
    showConfirm
}