const { response } = require("express");
const bcrypt = require('bcryptjs'); 
const Usuarios = require("../models/usuarios");

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get Api-controlador'
    });
};

const usuariosPut = (req, res = response) => {
    const { nombre, Email } = req.body;
    res.json({
        msg: 'Put Api-controlador',
        nombre,
        Email
    });
};

const usuariosPost = async (req, res = response) => {
    const { nombre, Email, password } = req.body;

    try {
        // Encriptar la contraseña antes de almacenarla en la base de datos
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear un nuevo usuario con la contraseña encriptada
        const usuario = new Usuarios({
            nombre,
            Email,
            password: hashedPassword
        });

        // Guardar el usuario en la base de datos
        await usuario.save();

        res.json({
            msg: 'Post Api-controlador',
            body: req.body
        });
    } catch (error) {
        console.error('Error al guardar en la base de datos:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Api-controlador'
    });
};

const usuariosPatch = (req, res = response) => {
    const { nombre, Email } = req.body;
    res.json({
        msg: 'Patch Api-controlador',
        nombre,
        Email
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};
